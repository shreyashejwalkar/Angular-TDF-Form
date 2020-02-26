import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  title = 'Template driven forms';
  topics =["Angular", "React", "Vue"];
  topicHasError=true;
  userModel = new User('Shreya', 'abc@gmail.com', 4455887799, 'default', 'morning', true);
  constructor(private _enrollmentService: EnrollmentService) { }
  validateTopic(value)
  {
      if(value === 'default')
        this.topicHasError=true;
      else
        this.topicHasError=false;  
  }  

  onSubmit()
  {
    this.submitted=true;
      this._enrollmentService.enroll(this.userModel).subscribe(data => console.log('Success!', data),error => console.error('Error!', error));
  }
}
