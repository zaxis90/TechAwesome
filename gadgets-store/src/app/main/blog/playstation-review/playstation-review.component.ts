import { Component, OnInit } from '@angular/core';
import {BlogDetailsService} from "../../../../services/blog-details.service";

@Component({
  selector: 'app-playstation-review',
  templateUrl: './playstation-review.component.html',
  styleUrls: ['./playstation-review.component.scss']
})
export class PlaystationReviewComponent implements OnInit {

  public playstationInfo: any;

  constructor(public _info: BlogDetailsService) { }

  ngOnInit(): void {
    this._info.getResult().subscribe((item: any) => {
      this.playstationInfo = item.blog[2];
    })
  }

}
