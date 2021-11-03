import {Component, Inject, OnInit} from '@angular/core';
import {GoodsDetailsService} from "../../../services/goods-details.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-cards',
  templateUrl: './modal-cards.component.html',
  styleUrls: ['./modal-cards.component.scss']
})
export class ModalCardsComponent implements OnInit {

  public currentGood: any;
  private basketTerm = 'buy_product';

  constructor(private router: Router, private _product: GoodsDetailsService, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this._product.getResult().subscribe((item: any) => {
      let product
      product = item.products.filter((item: any) => {
        return item.id === this.data.id
      })
      this.currentGood = product[0]
    })
  }

  public addFavorites(product: any) {
    product.isFavorite = true;
    this._product.addToCart(product);
  }

  public moveToBasket(product: any) {
    product.isBasket = true;
    this.router.navigateByUrl('home/main/basket/' + this.basketTerm).then(r => true);
    this._product.addToBasket(product);
  }
}

