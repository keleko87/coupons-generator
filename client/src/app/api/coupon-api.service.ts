import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdministracioApiService {
  readonly BASE_PATH = '/api';

  constructor(private http: HttpClient) {}

  // POST: Generate coupons list by config file uploaded
  public generateCouponsByFile(payload: { file: FormData }) {
    return this.http.post(`${this.BASE_PATH}/create`, payload.file);
  }
}
