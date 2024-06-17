import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponet {

constructor(private dbzService : DBZService ){}

  get Character(): Character[]{
    return [...this.dbzService.character];
  }

  onDeleteCharacter(id : string):void{
    this.dbzService.deleteCharacterById(id)
  }

  onNewcharacter(character : Character){
    this.dbzService.Addcharacter(character);
  }

}
