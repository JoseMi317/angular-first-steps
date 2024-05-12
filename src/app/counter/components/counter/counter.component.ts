import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:  `
  <p>
  BIENVENIDOS A LA PAGINA DE ANGULAR DE JOSEMI <3
  </p>
    <h3> Counter : {{counter}} </h3>

    <button (click)="increaseBy(1)" >Sumar 1</button>
    <button (click)="increaseBy(-1)">Restar 1</button>
    <button (click)="reset()">Resetear</button>
  `
})

export class CounterComponent{
  public counter : number = 10;

  increaseBy(value:number){
    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }

}
