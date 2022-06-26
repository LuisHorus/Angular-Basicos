import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //TODO: Cosas Publicas
    exports:[
        ListadoComponent
    ],
    //TODO: aqui van todos los modulos
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}