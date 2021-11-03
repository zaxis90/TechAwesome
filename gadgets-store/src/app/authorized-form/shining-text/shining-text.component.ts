import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shining-text',
  templateUrl: './shining-text.component.html',
  styleUrls: ['./shining-text.component.scss']
})
export class ShiningTextComponent implements OnInit {
  public logoName: string;
  public contacts: any;

  constructor() {
    this.logoName = 'TechAwesome';
    this.contacts = {
      firstNumber: "+38(063)-385-05-62",
      secondNumber: "+38(093)-099-11-11"
    };
  }

  ngOnInit(): void {
  }

}
