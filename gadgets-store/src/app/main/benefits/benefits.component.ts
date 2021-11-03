import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  public benefitsImg: Array<any> = [{
    imgUrl: './assets/alarm-clock.png',
    title: 'Работаем сутки напролет',
    text: 'Магазин работает круглосуточно 24/7'
  },
    {
      imgUrl: './assets/car-free.png',
      title: 'Бесплатная доставка',
      text: 'При заказе от 1000 грн. доставка по адресу бесплатно'
    },
    {
      imgUrl: './assets/returns.png',
      title: 'Возврат товара без проблем',
      text: 'При условии отсутствия повреждений товара'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {

  }

}
