import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { POSTS } from '../posts-storage';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  message: Message = {
    title: "Title",
    img: "",
    txt: "filler",
    link: "none"
  }

  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

}
