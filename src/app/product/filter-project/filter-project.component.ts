import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-filter-project',
  templateUrl: './filter-project.component.html',
  styleUrls: ['./filter-project.component.css']
})
export class FilterProjectComponent implements OnInit, OnDestroy {

  selectedCategory: string = '';
  categories: string[] = [];
  subscriptions: Subscription[] = [];
  categorySubscription: Subscription = new Subscription();

  @Output() selectCategory: EventEmitter<string> = new EventEmitter<string>();


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categorySubscription = this.productService.getCategories().subscribe(
      response => this.categories = response
    );
    this.subscriptions.push(this.categorySubscription)
  }

  onChangeCategory($event: any) {
    this.selectCategory.emit($event.value);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
