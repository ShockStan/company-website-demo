import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  carouselConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    verticalSwiping: false,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };


  items = ['w1.jpg', 'w2.jpg', 'w1.jpg', 'w2.jpg', 'w1.jpg', 'w2.jpg', 'w1.jpg', 'w2.jpg' ]
}
