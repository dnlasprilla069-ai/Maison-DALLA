import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 50;">
      <h1 style="font-family: serif; font-size: 1.5rem; letter-spacing: 0.1em; color: #0f172a; margin: 0;">MAISON DALLA</h1>
      <nav style="display: flex; gap: 1.5rem; font-size: 0.875rem; color: #475569;">
        <a href="#inicio" style="text-decoration: none; color: inherit;">Inicio</a>
        <a href="#catalogo" style="text-decoration: none; color: inherit;">Catálogo</a>
        <a href="#probador" style="text-decoration: none; color: inherit;">Probador A tu medida</a>
      </nav>
      <button (click)="cart.toggleBolsa(true)" style="background: #1e1e2f; color: #ffffff; border: none; padding: 0.5rem 1.25rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; cursor: pointer;">
        Bolsa ({{ cart.cantidadTotal() }})
      </button>
    </header>
  `
})
export class HeaderComponent {
  cart = inject(CartService);
}