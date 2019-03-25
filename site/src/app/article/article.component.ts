import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { POSTS } from '../posts-storage';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  message: Message;
  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(message: Message): void {
    message.open = !message.open;
  }
}
