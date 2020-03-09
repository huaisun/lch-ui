import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Output() handle = new EventEmitter<string>();

  formShow: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  signUp(): void {
    this.handle.emit();
  }
}
