import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.get("https://api.jsonbin.io/v3/b/63473cd965b57a31e6944819")
    // .subscribe((data) => this.displayPost(this.data))
  }
  // https://api.jsonbin.io/v3/b/63473cd965b57a31e6944819
  // https://jsonplaceholder.typicode.com/posts
  // displayPost(data)
  // {
  //   this.posts = data;
  // }

}
