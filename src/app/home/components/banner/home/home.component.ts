import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mySwiper: swiper;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.mySwiper = new swiper('.swiper-container');
  }

}
