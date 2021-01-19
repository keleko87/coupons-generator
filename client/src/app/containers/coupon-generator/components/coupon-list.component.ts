import {
  Component,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
} from '@angular/core';
import { ICoupon } from 'src/app/model/core.model';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CouponListComponent implements OnChanges {
  @Input() coupons: ICoupon[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.coupons?.currentValue) {
      // Detección de cambio manual, es decir, solo cuando haya cambios en el input 'coupons'
    }
  }
}
