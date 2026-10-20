import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-bolsa-panel',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  template: `
    @if (cart.panelBolsaAbierto()) {
      <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 100; display: flex; justify-content: flex-end;">
        <div style="width: 100%; max-width: 400px; background: white; height: 100%; padding: 2rem; display: flex; flex-direction: column; justify-content: space-between;">
          
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem; margin-bottom: 1.5rem;">
              <h3 style="font-family: serif; font-size: 1.5rem; margin: 0;">Tu bolsa</h3>
              <button (click)="cart.toggleBolsa(false)" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>

            @for (item of cart.items(); track item.producto.id) {
              <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 0.75rem; border-radius: 1rem; margin-bottom: 0.75rem;">
                <div>
                  <p style="font-weight: 600; margin: 0; font-size: 0.875rem;">{{ item.producto.nombre }}</p>
                  <p style="color: #64748b; margin: 0; font-size: 0.75rem;">{{ item.producto.precio | currency:'USD' }}</p>
                </div>
                <div style="display: flex; gap: 0.5rem; align-items: center;">
                  <button (click)="cart.cambiarCantidad(item.producto.id, item.cantidad - 1)">-</button>
                  <span>{{ item.cantidad }}</span>
                  <button (click)="cart.cambiarCantidad(item.producto.id, item.cantidad + 1)">+</button>
                </div>
              </div>
            }

            @if (cart.items().length === 0) {
              <p style="text-align: center; color: #94a3b8; font-size: 0.875rem;">Tu bolsa está vacía.</p>
            }
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 1rem;">
            <div style="display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 1rem;">
              <span>Subtotal</span>
              <span style="color: #3B4CCA;">{{ cart.subtotal() | currency:'USD' }}</span>
            </div>
            <button (click)="vaciarYNotificar()" [disabled]="cart.items().length === 0" style="width: 100%; background: #3B4CCA; color: white; border: none; padding: 1rem; border-radius: 9999px; font-weight: 600; cursor: pointer;">
              Finalizar compra
            </button>
          </div>

        </div>
      </div>
    }
  `
})
export class BolsaPanelComponent {
  cart = inject(CartService);

  vaciarYNotificar() {
    alert('¡Pedido procesado con éxito! Enviado a la fábrica de costurería de Maison DALLA.');
    this.cart.vaciar();
    this.cart.toggleBolsa(false);
  }
}