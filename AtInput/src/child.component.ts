import { Component, Input} from '@angular/core';
import { Character} from './character';
@Component({
  selector: 'child-component',
  template:`
  <div style="border:2px solid orange; padding:5px">
    <h2>Child Component: <span *ngIf="character">{{character.name}}</span></h2>
  </div>
  `
})
export class ChildComponent {
   @Input() character: Character;
}