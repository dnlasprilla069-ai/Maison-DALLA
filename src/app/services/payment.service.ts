import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RespuestaCheckout {
  checkoutUrl: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private http = inject(HttpClient);

  iniciarPago(productos: { productoId: number; cantidad: number }[]): Observable<RespuestaCheckout> {
    return this.http.post<RespuestaCheckout>('/api/checkout', { productos });
  }
}