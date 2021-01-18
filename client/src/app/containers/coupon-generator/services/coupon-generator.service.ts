import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CouponApiService } from 'src/app/api/coupon-api.service';

@Injectable({
  providedIn: 'root',
})
export class CouponGeneratorService {
  constructor(private couponApiService: CouponApiService) {}

  generateCoupons(file: FormData): Observable<object> {
    return this.couponApiService.generateCouponsByFile(file);
  }
}
