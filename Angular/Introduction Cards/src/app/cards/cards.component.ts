import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  check: boolean | undefined;
  posts: any;
  searchText: any;
  x: string | undefined;
  props: any;
  constructor(private http: HttpClient) {
    this.check = false;
  }

  ngOnInit(): void {
    this.http
      .get('https://api.jsonbin.io/v3/b/63473cd965b57a31e6944819')
      .subscribe((data) => this.displayPost(data));
  }

  displayPost(data: Object) {
    this.posts = data;
    // console.log(this.posts.record);
  }

  ToggleEffect() {
    this.check = !this.check
    // this.x === "Follow" ? "Follow" : "Following";
    // this.x === "Follow" ? alert(`You started to follow`) : alert("You stoped to follow");
  }

  // getValue(event: Event): string {
  //   const values  = (event.target as HTMLInputElement).value;
  //   console.log(values)
  //   return values
  // }
}
