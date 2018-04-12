import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators as AngularValidators, FormBuilder } from '@angular/forms';
import { Validators } from 'angular-reactive-validation';

@Component({
  selector: 'arv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb: FormBuilder) {
  }

  title = 'app';

  form = this.fb.group({
    name: this.fb.group({
      firstName: ['', [Validators.required('A first name is required'),
        Validators.minLength(10, (minLength => `Minimum length is ${minLength}`)),
        Validators.maxLength(5, (maxLength => `Maximum length is ${maxLength}`))]],
      middleName: ['', [Validators.maxLength(50, (maxLength => `Maximum length is ${maxLength}`))]],
      lastName: ['', [Validators.required('A last name is required'),
        Validators.maxLength(() => 10 * 5, (maxLength => `Maximum length is ${maxLength}`))]]
    }),
    age: [null, [
      Validators.required('An age is required'),
      Validators.min(0, 'You can\'t be less than zero years old.'),
      Validators.max(150, (max => `Can't be more than ${max}`))
    ]]
  });
}
