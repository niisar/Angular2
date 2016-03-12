import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';

@Component({
  selector:'parent-app',
  template:`
  <div style="border:2px solid orange; padding:5px;">
    <h1>Parent Component: {{parent}}</h1>
    <child-app (changed)=changed($event)></child-app>
  </div>
  `,
  directives:[ChildComponent]
})
export class AppComponent{
  changed(changedCharacter:any){
    if(changedCharacter){
      this.parent = changedCharacter.name;
    }
  } 
} 