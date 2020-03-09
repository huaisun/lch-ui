import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() handle = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  signIn() {
    this.handle.emit();
  }

}
