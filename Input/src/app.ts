//our root app component
import {Component, NgModule, Input} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { ChildComponent } from './child.component';
import { Character } from './character';

@Component({ 
  selector: 'my-app',
    template: `
  <div style = "border:2px solid orange; padding:5px;">
    <h1>Parent Component</h1>
    <input [(ngModel)] = "characters[0].name"/>
    <button (click)="select(characters[0])">Input</button>
    <br/><br/>
    <story-characters  [character]="selectedCharacter"></story-characters>
  </div>
  `,
  directives:[ChildComponent]
})
export class ParentComponent{
  characters = [
    {
      "id":11,
      "name":"Name"
    }];
    
    selectedCharacter: Character;
    
    select(selectedCharacter : character){
      this.selectedCharacter = selectedCharacter;
      console.log(1)
    }
}

@NgModule({
  imports: [ BrowserModule,FormsModule  ],
  declarations: [ ParentComponent,ChildComponent  ],
  bootstrap: [ ParentComponent ]
})
export class AppModule {}