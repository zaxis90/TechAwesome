import { Component, OnInit } from '@angular/core';
import {BlogDetailsService} from "../../../../services/blog-details.service";

@Component({
  selector: 'app-apple-review',
  templateUrl: './apple-review.component.html',
  styleUrls: ['./apple-review.component.scss']
})
export class AppleReviewComponent implements OnInit {
  public appleInfo: any;

  constructor(public _info: BlogDetailsService) {}

  ngOnInit(): void {
    this._info.getResult().subscribe((item: any) => {
      this.appleInfo = item.blog[0];
    })
  }

}
