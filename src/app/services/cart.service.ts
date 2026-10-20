import { Injectable, computed, signal } from '@angular/core';

export interface Prenda {
  id: number;
  nombre: string;
  precio: number;
  categoria: 'Mujer' | 'Hombre' | 'Accesorio';
  subcategoria: 'Vestidos' | 'Parte de arriba' | 'Parte de abajo' | 'Accesorio';
}

export interface ItemCarrito {
  producto: Prenda;
  cantidad: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSignal = signal<ItemCarrito[]>([]);
  items = this.itemsSignal.asReadonly();

  cantidadTotal = computed(() =>
    this.itemsSignal().reduce((total, item) => total + item.cantidad, 0)
  );

  subtotal = computed(() =>
    this.itemsSignal().reduce((total, item) => total + item.producto.precio * item.cantidad, 0)
  );

  panelBolsaAbierto = signal<boolean>(false);

  toggleBolsa(abrir?: boolean): void {
    this.panelBolsaAbierto.set(abrir !== undefined ? abrir : !this.panelBolsaAbierto());
  }

  agregar(producto: Prenda): void {
    const actual = this.itemsSignal();
    const encontrado = actual.find(item => item.producto.id === producto.id);
    if (encontrado) {
      this.itemsSignal.set(actual.map(item =>
        item.producto.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      this.itemsSignal.set([...actual, { producto, cantidad: 1 }]);
    }
    this.toggleBolsa(true);
  }

  cambiarCantidad(id: number, cantidad: number): void {
    if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > 20) return;
    this.itemsSignal.set(this.itemsSignal().map(item =>
      item.producto.id === id ? { ...item, cantidad } : item
    ));
  }

  quitar(id: number): void {
    this.itemsSignal.set(this.itemsSignal().filter(item => item.producto.id !== id));
  }

  vaciar(): void {
    this.itemsSignal.set([]);
  }
}