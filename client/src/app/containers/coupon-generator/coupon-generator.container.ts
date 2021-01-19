import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { IFileUpload } from 'src/app/model/core.model';
import { CouponGeneratorService } from './services/coupon-generator.service';

@Component({
  selector: 'app-coupon-generator',
  templateUrl: './coupon-generator.container.html',
})
export class CouponGeneratorContainer implements OnInit {
  form: FormGroup;
  fileSelected: IFileUpload = {
    file: null,
    isValidSize: false,
  };

  coupons$: Observable<object>;

  constructor(
    private fb: FormBuilder,
    private couponService: CouponGeneratorService
  ) {}

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

  resetFile() {
    this.fileSelected.file = null;
  }

  submitForm() {
    this.form.markAllAsTouched();

    const formData = this.appendFormDataFile(this.fileSelected.file);
    this.coupons$ = this.couponService.generateCoupons(formData).pipe(take(1));
    this.resetFile();
  }
}
