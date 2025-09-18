import { Component } from "@angular/core";

@Component({
    template: ` 
        <h1>{{counter}}</h1>
        <h2>Counter Component</h2>
        <button (click)="decrease()" [disabled]="counter == 0" >-</button>
        <button (click)="increase()" [disabled]="counter == 0" >+</button>
        `
})

//generar boton ams y boton menos
//bloquear el boton menos si el contador es 0

export class CounterPageComponent {

    counter = 10;

    decrease(){
        this.counter = this.counter - 1;
    }
    increase(){
        this.counter = this.counter + 1;
    }


}