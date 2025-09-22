import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-usuario',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  nombre:string = "Jordan";
  edad: number = 21;
  
  nombreCapitalizado: string = this.nombre.toLocaleUpperCase();
  mostrarModal: boolean = false;
  datoEditar: string = "";
  datoNuevo: any = "";

  cambiarDato(){ 
    switch(this.datoEditar) {
      case 'nombre':
        this.nombre = this.datoNuevo;
        this.datoEditar = "";
        
        this.mostrarModal = false;
        this.datoNuevo = "";
        break;
      case 'edad':
        this.edad = this.datoNuevo;
        this.datoEditar = "";
        this.mostrarModal = false;
        this.datoNuevo = "";
        break;
      case 'nombreCapitalizado':
        this.nombreCapitalizado = this.datoNuevo.toLocaleUpperCase();
        this.datoEditar = "";
        this.mostrarModal = false;
        this.datoNuevo = "";
        break;
    }
  }

  showModal(modelo:string){
    this.datoEditar = modelo;
    this.mostrarModal = true;
  }

  resetDatos(){
    this.nombre = "Jordan";
    this.edad = 21;
    this.nombreCapitalizado = this.nombre.toLocaleUpperCase();
  }
}
