import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomFileUpload } from 'src/app/model/core.model';

@Component({
  selector: 'app-coupon-generator',
  templateUrl: './coupon-generator.container.html',
})
export class CouponGeneratorContainer implements OnInit {
  form: FormGroup;
  fileSelected: CustomFileUpload = {
    file: null,
    isValidSize: false,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({});
  }

  get isInvalidFileSize() {
    return this.fileSelected.file && !this.fileSelected.isValidSize;
  }

  selectFile(ev) {
    this.fileSelected = ev;
  }

  appendFormDataFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return formData;
  }

  resetFormacioFields() {}

  createCoupons(file: File) {
    const formData = this.appendFormDataFile(file);
    // Send to API
  }

  submitForm() {
    this.form.markAllAsTouched();
    this.createCoupons(this.fileSelected.file);
  }
}
