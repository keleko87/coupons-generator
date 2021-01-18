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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CouponListComponent implements OnChanges {
  @Input() coupons: ICoupon[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.coupons?.currentValue) {
      // Changes here
    }
  }
}
