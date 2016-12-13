//our root app component
import { Component, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms';
import { ChildComponent } from './child.component';
import { Character } from './character';

@Component({
  selector: 'my-app',
  template: `
  <h1>@input</h1>
  <div style = "border:2px solid orange; padding:5px;">
    <h2>Parent Component</h2>
    <input [(ngModel)] = "characters[0].name"/>
    <button (click)="select(characters[0])">Input</button>
    <br/><br/> 
    <child-component  [character]="selectedCharacter"></child-component>
  </div>
  `,
})
export class App {
  characters = [
    {
      "id":11,
      "name":"Name"
    }];
     
    selectedCharacter: Character;
    
    select(selectedCharacter : character){
      this.selectedCharacter = selectedCharacter;
    }
}

@NgModule({
  imports: [ BrowserModule,FormsModule  ],
  declarations: [ App, ChildComponent ],
  bootstrap: [ App ]
})
export class AppModule {}