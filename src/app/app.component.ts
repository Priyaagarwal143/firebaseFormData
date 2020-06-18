import { AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  description = 'Storing form data in Firebase';

  emailValue = '';
  passwordValue = '';
  addressValue = '';
  addressValue2 = '';
  cityValue = '';
  stateValue = '';
  zipValue = '';
  values: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.values = db.list('values').valueChanges();
}
  
  onSubmit() {
    this.db.list('values').push({
      email: this.emailValue, 
      password: this.passwordValue,
      address: this.addressValue,
      address2: this.addressValue2,
      city: this.cityValue,
      state: this.stateValue,
      zip: this.zipValue,
    });
    this.emailValue = '';
    this.passwordValue = '';
    this.addressValue = '';
    this.addressValue2 = '';
    this.cityValue = '';
    this.stateValue = '';
    this.zipValue = '';
}

}
