import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="inicio" style="background: #F6F5F9; padding: 4rem 2rem; text-align: center;">
      <h2 style="font-family: serif; font-size: 3rem; color: #0f172a; margin-bottom: 1rem;">Tu estilo, tu esencia, tu creación.</h2>
      <p style="color: #64748b; max-width: 600px; margin: 0 auto 2rem auto; font-size: 1rem;">
        Diseñamos contigo la prenda que imaginas. Tú eliges cada detalle, nosotros hacemos realidad tu visión.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <a href="#catalogo" style="background: #3B4CCA; color: white; padding: 0.75rem 1.5rem; border-radius: 9999px; text-decoration: none; font-size: 0.875rem;">Ver la colección</a>
        <a href="#probador" style="border: 1px solid #3B4CCA; color: #3B4CCA; padding: 0.75rem 1.5rem; border-radius: 9999px; text-decoration: none; font-size: 0.875rem;">Probar a mi medida</a>
      </div>
    </section>
  `
})
export class HeroComponent {}