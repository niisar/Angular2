//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h3
      (mouseover) = "log('mouseover')"
      (mousedown) = "log('mousedown')"
      (mouseleave) = "log('mouseleave')"
      (mouseup) = "log(mouseup)"
      (click) = "log('click')"
      >Hover Me</h3>
      <input  
        (blur)="log('blur')"
        (focus)="log('focus')"
        (keydown)="log('keydown',$event)"
        (keyup) = "log('keyup',$event)"
        (keypress)="log('keypress',$event)"
      type="text">
    </div>
    <br>
    <ul>
      <li *ngFor="let msg of messages">{{msg}}</li>
    </ul>
  `,
})
export class App {
  messages: string[] = [];
  log(msg: string, data: string){
    this.messages.splice(0,0,msg)
    //if(data){
    //  console.log(data)
    //}
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}