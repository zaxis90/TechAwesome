import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements AfterViewInit {

  @ViewChildren('blog') blogElements: QueryList<ElementRef> | undefined;

  private arrElements: any;

  public blogInfo: Array<any> = [
    {
      imgUrl: 'https://i.ytimg.com/vi/dIE37riAd3Y/maxresdefault.jpg',
      title: 'Обзор Samsung Galaxy Tab A 8.0 и 5 плюшек, которые приготовили производители',
      desc: 'Читать подробнее',
      path: 'samsung'
    },
    {
      imgUrl: 'https://rozetked.me/images/uploads/lEinafuL1cfZ.jpg',
      title: 'Как установить на Playstation 5 M.2 SSD: 6 объяснений и пошаговая инструкция',
      desc: 'Читать подробнее',
      path: 'playstation'
    },
    {
      imgUrl: 'https://images.1a.lv/display/aikido/store/cce2a4b6d776c7799a89aada80f75a08.jpg',
      title: 'JBL Pulse 4: обзор 5 параметров обновленной модели',
      desc: 'Читать подробнее',
      path: 'jbl'
    },
    {
      imgUrl: 'https://img.gadgethacks.com/img/72/44/63561503935091/0/here-are-prices-for-every-apple-watch-model-from-349-17-000.1280x600.jpg',
      title: 'Apple Watch 7: обзор и 4 фишки в придачу',
      desc: 'Читать подробнее',
      path: 'apple'
    },
    {
      imgUrl: 'https://chto-delat.info/thumb/2/AnUZGNK8WkRK0ZEW5AEsTQ/r/d/telefon_upal_v_vodu.jpg',
      title: 'Что делать, если телефон упал в воду: 3 возможных проблемы после намокания',
      desc: 'Читать подробнее',
      path: 'phone'
    }
  ]

  constructor() {
  }

  ngAfterViewInit(): void {
    this.arrElements = this.blogElements?.map((item) => item.nativeElement);
    this.arrElements[0].classList.add('active-blog');
  }

  public slidesPlugin(event: any) {
    this.arrElements.forEach((slide: any) => slide.classList.remove('active-blog'));
    event.classList.add('active-blog');
  }

  public moveUp(event: any) {
    if (event) {
      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          this.arrElements[0].classList.add('active-blog');
          window.scrollTo(0, pos - 20);
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }
}
