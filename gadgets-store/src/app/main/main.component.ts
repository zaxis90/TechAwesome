import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";
import {GoodsDetailsService} from "../../services/goods-details.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public searchControl: FormControl;
  public filteredResults$: Observable<string[]>;
  public productsName: any = [];
  public categories: string[] = ["Apple Store", "Смартфоны и телефоны", "Компьютеры", "Ноутбуки и планшеты", "Аудиотехника", "Гаджеты", "Телевизоры и аксессуары", "Фото и видеотехника", "Электротранспорт"]
  public searchTerm: String = "";
  public searchCategory: String = "";
  public favoriteTerm: String = "";
  public basketTerm: String = "";

  constructor(private route: ActivatedRoute, private router: Router, public _product: GoodsDetailsService) {
    this._product.getResult().subscribe((items: any) => {
      items.products.forEach((item: any) => {
        this.productsName.push(item.name)
      })
    })
    this.searchControl = new FormControl('');
    this.filteredResults$ = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterName(val))
      );
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });
  }

  private filterName(val: string): string[] {
    return this.productsName.filter((option: string) => option.toLowerCase().includes(val.toLowerCase()))
  }

  public categoriesFilter(event: any) {
    this.searchCategory = event.innerText;
    if (this.searchCategory) {
      this.router.navigateByUrl('home/main/category/' + this.searchCategory).then(r => true);
    }
  }

  public favoriteFilter(event: any) {
    this.favoriteTerm = event.innerText;
    let element = event.closest('div').children[1];
    if (Number(element.innerText) > 0) {
      element.style.display = 'block';
    }
    if (event) {
      this.router.navigateByUrl('home/main/fav/' + this.favoriteTerm).then(r => true);
    }
  }

  public basketFilter(event: any) {
    this.basketTerm = event.innerText;
    let element = event.closest('div').children[1];
    if (Number(element.innerText) > 0) {
      element.style.display = 'block';
    }
    if (event) {
      this.router.navigateByUrl('home/main/basket/' + this.basketTerm).then(r => true);
    }
  }

  public search(): void {
    if (this.searchTerm)
      this.router.navigateByUrl('home/main/search/' + this.searchTerm).then(r => true);
  }

  public moveTop(event: any) {
    if (event) {
      let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 40);
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }

  public moveToBlog(event: any) {
    if (event) {
      let scrollToBlog = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos >= 0) {
          window.scrollTo(0, pos + 40);
        }
        if (pos >= 1400) {
          window.clearInterval(scrollToBlog);
        }
      }, 16);
    }
  }
}
