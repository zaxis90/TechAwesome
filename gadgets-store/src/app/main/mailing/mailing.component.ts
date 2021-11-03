import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.scss']
})
export class MailingComponent implements OnInit {

  constructor(public email: AuthService) { }

  ngOnInit(): void {
  }

}
