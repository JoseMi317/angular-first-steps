import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','SheHulk','Capitan America']
  public deleteHero? : string;

removeLastHero():void{
  this.deleteHero = this.heroNames.pop();
}

}
