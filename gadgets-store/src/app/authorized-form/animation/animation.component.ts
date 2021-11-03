import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent {
  public elements: any;

  constructor() {
    this.elements = Array.from(Array(100));
  }
}
