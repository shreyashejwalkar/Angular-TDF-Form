import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template driven forms';
  topics =["Angular", "React", "Vue"];
  
  userModel = new User('Shreya', 'abc@gmail.com', 4455887799, '', 'morning', true);
}
