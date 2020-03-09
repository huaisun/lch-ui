import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  handle() {
    this.login = !this.login;
  }
}
