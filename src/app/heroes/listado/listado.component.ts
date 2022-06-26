import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes:string[]=['Spider-Man','Iron-man','Hulk','Thor','Capitan America'] ;
  heroeDeleted:string='';
  borrarHeroe(){
    console.log('Borrando Heroe');
    this.heroeDeleted = this.heroes.shift() || '';
    
  }
}
