import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailControl = new FormControl();
  passwordControl = new FormControl();
  hide = true;

  ngOnInit(): void {
    this.emailControl.valueChanges.subscribe(value => console.log(value));
    this.passwordControl.valueChanges.subscribe(value => console.log(value));
  }
}
