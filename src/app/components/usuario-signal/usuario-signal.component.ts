import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
  selector: 'app-usuario-signal',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario-signal.component.html',
  styleUrl: './usuario-signal.component.css'
})
export class UsuarioSignalComponent {
  nombre = signal("Jordan");
  edad = signal(21);
  
  nombreCapitalizado = signal(this.nombre().toLocaleUpperCase());
  mostrarModal = signal(false);
  datoEditar = signal("");
  datoNuevo = signal("");

  cambiarDato(){ 
    const campo = this.datoEditar();
    const valor = this.datoNuevo();
    
    switch (campo) {
      case 'nombre':
        this.nombre.set(valor.trim());
        this.nombreCapitalizado.set(valor.toLocaleUpperCase());
        break;

      case 'edad': {
        const n = Number(valor);
        this.edad.set(n);
        break;
      }

      case 'nombreCapitalizado':
        this.nombreCapitalizado.set(valor);
        this.nombreCapitalizado.set(valor.toLocaleUpperCase());
        break;
    }

    this.datoEditar.set('');
    this.datoNuevo.set('');
    this.mostrarModal.set(false);
  }

  showModal(modelo:any){
    this.datoEditar.set(modelo);
    this.mostrarModal.set(true);
  }

  resetDatos(){
    this.nombre.set('Jordan');
    this.edad.set(21);
    this.nombreCapitalizado.set(this.nombre().toLocaleUpperCase());
  }
}
