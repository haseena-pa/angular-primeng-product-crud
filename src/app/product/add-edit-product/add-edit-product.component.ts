import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  @Input() displayAddModal: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();

  productForm = this.fb.group({
    title: ["", Validators.required],
    price: [0, Validators.required],
    description: [""],
    category: ["", Validators.required],
    image: ["", Validators.required]
  });
  constructor(private fb: FormBuilder, private productService: ProductService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.productForm.reset();
    this.clickClose.emit(true);
  }

  addProduct() {
    this.productService.saveProduct(this.productForm.value).subscribe(
      response => {
        this.clickAdd.emit(response);
        this.closeModal();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product added' });
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
        console.log('Errror occured');
      }
    )
  }

}
