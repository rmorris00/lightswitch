import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@ Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  
  status: boolean = false;

  @Output() switchEmitter : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


switch(){
  this.switchEmitter.emit(this.status);
};







}
