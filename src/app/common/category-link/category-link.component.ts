import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-link',
  templateUrl: './category-link.component.html',
  styleUrls: ['./category-link.component.css']
})
export class CategoryLinkComponent implements OnInit {

  @Input() value: string;

  @Output() voted = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.voted.emit(this.value);
  }

}
