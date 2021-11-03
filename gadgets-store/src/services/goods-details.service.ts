import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GoodsDetailsService {

  public favoriteGoods: any[] = [];
  public basketGoods: any[] = [];
  public changeText: any;

  constructor(private _http: HttpClient) {
  }


  public getResult() {
    return this._http.get('./assets/goods-info.json');
  }

  public addToBasket(product: any) {
    if (!this.basketGoods.find(element => element.id == product.id))
      this.basketGoods.push(product);
  }
  public removeCartFromBasket(product: any) {
    this.basketGoods = this.basketGoods.filter((item: any) => {
      return item.id !== product.id;
    })
  }

  public addToCart(product: any) {
    if (!this.favoriteGoods.find(element => element.id == product.id))
      this.favoriteGoods.push(product);
  }

  public removeCartFromFavorite(product: any) {
      this.favoriteGoods = this.favoriteGoods.filter((item: any) => {
        return item.id !== product.id;
      })
  }

}
