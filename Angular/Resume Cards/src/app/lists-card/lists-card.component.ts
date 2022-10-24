import { Component, OnInit } from '@angular/core';
import { Items } from '../general';

@Component({
  selector: 'app-lists-card',
  templateUrl: './lists-card.component.html',
  styleUrls: ['./lists-card.component.css']
})
export class ListsCardComponent implements OnInit {
  items = Items;
  MyList = 'skills and professional experiences'
  constructor() { }
  ngOnInit(): void {
  }
  ToggleAccept() {
    this.items[0].skill[0].bool = !this.items[0].skill[0].bool
  }
  ChangeItem(groupIndex: number, skillIndex: number ){
    this.items[groupIndex].skill[skillIndex].bool = !this.items[groupIndex].skill[skillIndex].bool;
  }
}
