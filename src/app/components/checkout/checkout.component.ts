import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  template: `
    <section style="padding: 2rem; max-width: 600px; margin: 0 auto; text-align: center;">
      <button (click)="pagar()" style="background: #3B4CCA; color: white; border: none; padding: 1rem 2rem; border-radius: 9999px; font-weight: bold; cursor: pointer;">
        Continuar al pago seguro
      </button>
    </section>
  `
})
export class CheckoutComponent {
  cart = inject(CartService);
  private payment = inject(PaymentService);

  pagar(): void {
    const productos = this.cart.items().map(item => ({
      productoId: item.producto.id,
      cantidad: item.cantidad
    }));

    if (productos.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    this.payment.iniciarPago(productos).subscribe({
      next: respuesta => window.location.assign(respuesta.checkoutUrl),
      error: () => alert('Pago simulado procesado correctamente.')
    });
  }
}