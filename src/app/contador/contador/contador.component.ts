import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:  `
    
    <h1> {{title}} </h1>
    <h2> La base es de: <strong>{{base}}</strong></h2>
    <button (click)="acumulador(-base)">-{{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumulador(base)" >+{{base}}</button>  
    `
})

export class ContadorComponent{
    title:string = 'Contador App';
    numero:number = 0;
    base:number=3;
    acumulador(valor:number){
    this.numero += valor;
  }
}