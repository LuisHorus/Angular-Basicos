import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

//TODO: Aqui creamos un nuevo Componente
export class HeroeComponent{
    nombre:string='Iron-Man';
    edad:number=45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    //*Metodo
    obtenerDatos():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Spider-man'
    }
    cambiarEdad():void{
        this.edad=28;
    }

}