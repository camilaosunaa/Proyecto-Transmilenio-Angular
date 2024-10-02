import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'My Application';

  onAddClick() {
    // Lógica para agregar
    console.log('Añadir clicado');
  }

  onDeleteClick() {
    // Lógica para eliminar
    console.log('Eliminar clicado');
  }

  onEditClick() {
    // Navegar a otra pantalla o abrir un modal
    console.log('Editar clicado');
    // Ejemplo de navegación:
    // this.router.navigate(['/editar']);
  }
}
