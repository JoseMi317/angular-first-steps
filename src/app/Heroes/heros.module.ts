import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { HeroComponent } from "./Components/Hero/hero.component";
import { ListComponent } from "./Components/List/list.component";

@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent,
  ],
  imports:[
    CommonModule
  ]
})

export class HeroesModule{}

