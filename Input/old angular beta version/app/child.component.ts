import { Component, Input} from 'angular2/core';
import { Character} from './character';
@Component({
  selector: 'story-characters',
  template:`
  <div style="border:2px solid orange; padding:5px">
    <h1>Child Component: <span *ngIf="character">{{character.name}}</span></h1>
  </div>
  `,
  inputs:['character']
})
export class ChildComponent {
   public character: Character;
}