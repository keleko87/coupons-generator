import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponGeneratorContainer } from './coupon-generator.container';

const routes: Routes = [
  {
    path: 'create',
    component: CouponGeneratorContainer,
  },
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponGeneratorRoutingModule {}
