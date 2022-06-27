import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent  {
  // personajes:Personaje[]=[];

  nuevo:Personaje={
    nombre:'Maestro Roshi',
    poder:10
  }
  // get personajes():Personaje[]{
  //   return this.DbzService.personajes;
  // }


  constructor(){ //Inyeccion de dependicias
    // this.personajes=this.DbzService.personajes;
  }

}