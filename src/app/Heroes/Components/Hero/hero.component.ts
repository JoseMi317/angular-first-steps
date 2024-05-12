import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-hero-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name : string = 'ironman';
  public age : number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

   getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeName(): string{
    return this.name = 'Spiderman'
  }

  changeAge():number{
    return this.age = 25;
  }

  returnAll(): void{
    this.name = 'ironman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element =>{
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // })
  }

}
