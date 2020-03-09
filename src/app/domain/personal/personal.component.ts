import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  data = [{ id: 1, value: '' }, { id: 2, value: '' }, { id: 3, value: '' }];

  @ViewChild('categoryLink') categoryLink;

  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handle(value, id) {
    this.data.map(item => {
      if(item.id === id) {
        item.value = value;
      }
    })
  }

  getValues() {
    console.log(this.categoryLink.value);

    console.log('----------------------------');

    console.log(this.data);
  }

}
