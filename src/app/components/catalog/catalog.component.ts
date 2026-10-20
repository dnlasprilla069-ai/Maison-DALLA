import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService, Prenda } from '../../services/cart.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  template: `
    <section id="catalogo" style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto;">
      <h3 style="font-family: serif; font-size: 2.25rem; text-align: center; margin-bottom: 2rem;">Catálogo Exclusivo</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
        @for (item of prendas; track item.id) {
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 1.5rem; padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="height: 200px; background: #E8EBFB; border-radius: 1rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; color: #64748b;">
              {{ item.nombre }}
            </div>
            <h4 style="font-size: 1.125rem; margin: 0 0 0.5rem 0;">{{ item.nombre }}</h4>
            <p style="color: #3B4CCA; font-weight: bold; margin-bottom: 1rem;">{{ item.precio | currency:'USD' }}</p>
            <button (click)="cart.agregar(item)" style="background: #3B4CCA; color: white; border: none; padding: 0.75rem; border-radius: 9999px; width: 100%; cursor: pointer; font-size: 0.875rem;">
              Añadir a la bolsa
            </button>
          </div>
        }
      </div>
    </section>
  `
})
export class CatalogComponent {
  cart = inject(CartService);

  prendas: Prenda[] = [
    { id: 1, nombre: 'Vestido Marea', precio: 89, categoria: 'Mujer', subcategoria: 'Vestidos' },
    { id: 2, nombre: 'Vestido Aurora', precio: 95, categoria: 'Mujer', subcategoria: 'Vestidos' },
    { id: 3, nombre: 'Blusa Salvia', precio: 46, categoria: 'Mujer', subcategoria: 'Parte de arriba' },
    { id: 4, nombre: 'Blazer Lino', precio: 98, categoria: 'Mujer', subcategoria: 'Parte de arriba' },
    { id: 5, nombre: 'Pantalón Sastre', precio: 72, categoria: 'Mujer', subcategoria: 'Parte de abajo' },
    { id: 6, nombre: 'Camisa Lino', precio: 52, categoria: 'Hombre', subcategoria: 'Parte de arriba' }
  ];
}