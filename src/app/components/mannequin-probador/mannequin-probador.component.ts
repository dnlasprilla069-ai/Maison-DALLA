import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService, Prenda } from '../../services/cart.service';

@Component({
  selector: 'app-mannequin-probador',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="probador" style="background: #F6F5F9; padding: 4rem 2rem;">
      <div style="max-width: 1000px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem; align-items: center;">
        
        <!-- Maniquí Visual -->
        <div style="background: #E8EBFB; border-radius: 2rem; padding: 2rem; min-height: 380px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div [style.transform]="'scale(' + (pecho / 90) + ')'" style="transition: all 0.3s; display: flex; flex-direction: column; align-items: center;">
            <div style="width: 24px; height: 32px; background: #D3C5B4; border-radius: 12px 12px 0 0;"></div>
            <div style="width: 120px; height: 180px; background: #3B4CCA; border-radius: 0 0 24px 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></div>
            <div style="width: 6px; height: 48px; background: #B5A490;"></div>
            <div style="width: 80px; height: 8px; background: #B5A490; border-radius: 9999px;"></div>
          </div>
        </div>

        <!-- Controles de Medidas -->
        <div style="background: #ffffff; padding: 2rem; border-radius: 1.5rem; border: 1px solid #e2e8f0;">
          <h3 style="font-family: serif; font-size: 1.75rem; margin-bottom: 1rem;">Tu maniquí, a tu medida</h3>
          
          <div style="margin-bottom: 1.25rem;">
            <label style="font-size: 0.875rem; font-weight: 600; display: block; margin-bottom: 0.5rem;">Contorno de pecho: {{ pecho }} cm</label>
            <input type="range" min="70" max="130" [(ngModel)]="pecho" style="width: 100%; accent-color: #3B4CCA;">
          </div>

          <button (click)="agregarAlCarrito()" style="width: 100%; background: #3B4CCA; color: white; border: none; padding: 0.875rem; border-radius: 9999px; font-weight: 600; cursor: pointer;">
            Añadir prenda personalizada a la bolsa
          </button>
        </div>

      </div>
    </section>
  `
})
export class MannequinProbadorComponent {
  cart = inject(CartService);
  pecho: number = 90;

  agregarAlCarrito() {
    const prendaPersonalizada: Prenda = { id: 99, nombre: 'Vestido Marea (A Medida)', precio: 89, categoria: 'Mujer', subcategoria: 'Vestidos' };
    this.cart.agregar(prendaPersonalizada);
  }
}