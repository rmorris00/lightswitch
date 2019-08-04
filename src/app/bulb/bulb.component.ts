import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bulb',
  templateUrl: './bulb.component.html',
  styleUrls: ['./bulb.component.css']
})
export class BulbComponent implements OnInit {

  @Output() status : boolean=false;


  constructor() { }

  ngOnInit() {
  }

  switchStatus(){
    this.status=!this.status;
  }



}
