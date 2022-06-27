import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable() //TODO:Esto lo hace  y lo diferencia de componente y modulo
//!Manipular y obtener data
export class DbzService{
    private _personajes:Personaje[]=[
        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre:'Vegueta',
          poder:12000
        }
    
      ];
      get personajes():Personaje[]{
        return [...this._personajes];
      }
    constructor(){
        
    }

    //!METODOS
    agregarPersonaje(personaje:Personaje){
      this._personajes.push(personaje);
    }
}