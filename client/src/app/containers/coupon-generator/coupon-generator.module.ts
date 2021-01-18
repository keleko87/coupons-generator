import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CouponGeneratorRoutingModule } from './coupon-generator-routing.module';
import { CouponGeneratorContainer } from './coupon-generator.container';
import { CouponGeneratorService } from './services/coupon-generator.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CouponListComponent } from './components/coupon-list.component';

@NgModule({
  declarations: [CouponGeneratorContainer, CouponListComponent],
  imports: [
    CommonModule,
    SharedModule,
    CouponGeneratorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CouponGeneratorService],
})
export class CouponGeneratorModule {}
