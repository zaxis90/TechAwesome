import {Component, OnInit} from '@angular/core';
import {GoodsDetailsService} from "../../../services/goods-details.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalCardsComponent} from "../modal-cards/modal-cards.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public goods: any[] = [];
  public currentGoods: any;

  constructor(public _product: GoodsDetailsService, public dialog: MatDialog, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getGoods()
  }

  public getGoods() {
    this.route.params.subscribe(params => {
      this._product.getResult().subscribe((item: any) => {
        this.goods = [...item.products].map((p: any) => {
          p.isFavorite = !!this._product.favoriteGoods.find((pr: any) => pr.id === p.id);
          p.isBasket = !!this._product.basketGoods.find((pr:any)=> pr.id === p.id);
          return p;
        });
        if (params.searchTerm) {
          this.currentGoods = this.goods.filter((item: any) => item.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
        } else if (params.searchCategory) {
          this.currentGoods = this.goods.filter((element: any) => {
            return element.category.includes(params.searchCategory)
          });
        } else if (params.favoriteTerm) {
          this.currentGoods = Array.from(new Set(this._product.favoriteGoods));
        } else if (params.actualCategory) {
          this.currentGoods = this.goods.filter((element: any) => {
            return element.name.toLowerCase().includes(params.actualCategory.toLowerCase());
          });
        } else if (params.basketTerm) {
          this.currentGoods = Array.from(new Set(this._product.basketGoods));
        } else {
          this.currentGoods = this.goods;
        }
      });
    })
  }

  public openDialog(id: any) {
    const dialogRef = this.dialog.open(ModalCardsComponent, {data: {id}});
  }

  public changeImg(event: any, link: any) {
    event.setAttribute('src', link)
  }

  public addFavorites(card: any): any {
    card.isFavorite = true;
    this._product.addToCart(card)
  }

  public removeFromFavorites(card: any): void {
    card.isFavorite = false;
    this._product.removeCartFromFavorite(card);
    this.getGoods();
  }

  public addBaskets(card: any): any {
    card.isBasket = true;
    this._product.addToBasket(card)
  }

  public removeFromBasket(card: any): any {
    card.isBasket = false;
    this._product.removeCartFromBasket(card);
    this.getGoods();
  }


}
