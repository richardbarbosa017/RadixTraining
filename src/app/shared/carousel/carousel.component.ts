import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  img1 = '../../../assets/d-a-v-i-d-s-o-n-l-u-n-a--fT2VvIp-uU-unsplash.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
