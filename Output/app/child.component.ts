import {Component, EventEmitter, Output} from 'angular2/core';
import{ Character } from './character';
@Component({
  selector:'child-app',
  template:`
    <div style = "border:2px solid orange; padding:5px;">
      <h1>Child Component</h1>
      <input [(ngModel)]="characters[0].name">
      <button (click)="select(characters[0])">Output</button>
    </div>
  `,
  outputs : ['changed']
})
export class ChildComponent implements OnInit{
  public  changed = new EventEmitter<Character>();
  characters = [
    {
      "id":11,
      "name":"Nisar"
    }
    ];
    
    selectedCharacter : Character;
    
    select(selectedCharacter: Character){
      this.changed.emit(selectedCharacter);
    }
}