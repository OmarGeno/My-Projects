import { Component, OnInit } from '@angular/core';
import { NormalCardInfo } from '../general';

@Component({
  selector: 'app-normal-card',
  templateUrl: './normal-card.component.html',
  styleUrls: ['./normal-card.component.css'],
})
export class NormalCardComponent implements OnInit {
  cardinfo: NormalCardInfo;
  constructor() {
    this.cardinfo = {
      fName: 'Nishida',
      lName: 'Yuji',
      fullName: 'Nishida Yuji',
      id: 0,
      check: false,
      country: 'Japan',
      style: {
        bg: 'lightblue',
        fSize: '22px',
        fColor: 'rgb(40, 110, 140)',
      },
    };
  }
  
  ngOnInit(): void {}
  
  ToggleAccept() {
    this.cardinfo.check = !this.cardinfo.check
  }

  title = "Hello, I'm";
}
