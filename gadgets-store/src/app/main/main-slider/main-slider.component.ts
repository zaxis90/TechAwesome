import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {GoodsDetailsService} from "../../../services/goods-details.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})

export class MainSliderComponent implements AfterViewInit {

  @ViewChild('container')
  public container: ElementRef | undefined;
  @ViewChild('sidebar')
  public sidebar: ElementRef | undefined;
  @ViewChild('mainSlide')
  public mainSlide: ElementRef | undefined;

  private activeSlideIndex: number = 0;
  private interval: any;
  public actualCategory: String = "";

  constructor(private _product: GoodsDetailsService, private router: Router) {
  }

  ngAfterViewInit(): any {
    const slideCount = this.mainSlide?.nativeElement.children.length;
    const sidebar = this.sidebar?.nativeElement;
    sidebar.style.top = `-${(slideCount - 1) * 85}vh`;
    this.interval = setInterval(() => {
      this.changeSlide('up')
    }, 8000)
  }

  public StopAutoChange(event: any) {
    if (event) {
      clearInterval(this.interval)
    }
  }

  public changeSlide(direction: string): void {
    const slideCount = this.mainSlide?.nativeElement.children.length;
    const container = this.container?.nativeElement;
    const mainSlide = this.mainSlide?.nativeElement;
    const sidebar = this.sidebar?.nativeElement;
    if (direction === 'up') {
      this.activeSlideIndex++;
      if (this.activeSlideIndex === slideCount) {
        this.activeSlideIndex = 0;
      }
    } else if (direction === 'down') {
      this.activeSlideIndex--;
      if (this.activeSlideIndex < 0) {
        this.activeSlideIndex = slideCount - 1;
      }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${this.activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${this.activeSlideIndex * height}px)`;
  }

  public actualFilter(event: any, name: string) {
    this.actualCategory = name;
    if (this.actualCategory) {
      this.router.navigateByUrl('home/main/actual/' + this.actualCategory).then(r => true);
    }
  }
}
