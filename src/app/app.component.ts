import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MannequinProbadorComponent } from './components/mannequin-probador/mannequin-probador.component';
import { BolsaPanelComponent } from './components/bolsa-panel/bolsa-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    CatalogComponent,
    MannequinProbadorComponent,
    BolsaPanelComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-catalog></app-catalog>
      <app-mannequin-probador></app-mannequin-probador>
    </main>
    <app-bolsa-panel></app-bolsa-panel>
  `
})
export class AppComponent {}