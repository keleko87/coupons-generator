import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponApiService {
  readonly BASE_PATH = '/api';

  constructor(private http: HttpClient) {}

  // POST: Generate coupons list by config file uploaded
  public generateCouponsByFile(file: FormData): Observable<object> {
    return this.http.post(`${this.BASE_PATH}/create`, file);
  }
}
