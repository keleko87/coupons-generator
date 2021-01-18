import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponGeneratorRoutingModule } from './coupon-generator-routing.module';
import { CouponGeneratorContainer } from './coupon-generator.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CouponGeneratorContainer],
  imports: [
    CommonModule,
    SharedModule,
    CouponGeneratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class CouponGeneratorModule {}
