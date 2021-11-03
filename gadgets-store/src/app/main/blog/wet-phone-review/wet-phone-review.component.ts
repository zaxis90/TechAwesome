import { Component, OnInit } from '@angular/core';
import {BlogDetailsService} from "../../../../services/blog-details.service";

@Component({
  selector: 'app-wet-phone-review',
  templateUrl: './wet-phone-review.component.html',
  styleUrls: ['./wet-phone-review.component.scss']
})
export class WetPhoneReviewComponent implements OnInit {

  public wetPhoneInfo: any;

  constructor(public _info: BlogDetailsService) {
  }

  ngOnInit(): void {
    this._info.getResult().subscribe((item: any) => {
      this.wetPhoneInfo = item.blog[4];
    })
  }

}
