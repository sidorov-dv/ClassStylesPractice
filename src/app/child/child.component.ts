import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrayNum: Array<string> = [];

  @Input() someText: string = '';
  @Output() someEvent = new EventEmitter<string>();
  
  addNewItem(value: string) {
    this.someEvent.emit(value);
  }

  generateNum() {
    this.arrayNum.push((Math.random()*10).toFixed(3))
  }


  widthBtn: string = '200px';
  styleInput: string = 'width: 250px; border: 2px solid blue;';
  fz: number = 40;

}
