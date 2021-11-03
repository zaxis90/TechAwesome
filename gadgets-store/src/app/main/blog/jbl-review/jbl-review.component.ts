import { Component, OnInit } from '@angular/core';
import {BlogDetailsService} from "../../../../services/blog-details.service";

@Component({
  selector: 'app-jbl-review',
  templateUrl: './jbl-review.component.html',
  styleUrls: ['./jbl-review.component.scss']
})
export class JblReviewComponent implements OnInit {

  public jblInfo: any;

  constructor(public _info: BlogDetailsService) { }

  ngOnInit(): void {
    this._info.getResult().subscribe((item: any) => {
      this.jblInfo = item.blog[1];
    })
  }

}
