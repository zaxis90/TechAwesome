import {Component, OnInit} from '@angular/core';
import {BlogDetailsService} from "../../../../services/blog-details.service";

@Component({
  selector: 'app-samsung-review',
  templateUrl: './samsung-review.component.html',
  styleUrls: ['./samsung-review.component.scss']
})
export class SamsungReviewComponent implements OnInit {

  public samsungInfo: any;

  constructor(public _info: BlogDetailsService) {}

  ngOnInit(): void {
    this._info.getResult().subscribe((item: any) => {
      this.samsungInfo = item.blog[3];
    })
  }

}
