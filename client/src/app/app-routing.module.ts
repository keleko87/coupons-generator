import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'coupons',
    loadChildren: () =>
      import('./containers/coupon-generator/coupon-generator.module').then(
        (m) => m.CouponGeneratorModule
      ),
  },
  {
    path: '',
    redirectTo: 'coupons',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
