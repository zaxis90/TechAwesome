import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalProfileComponent} from "../modal-profile/modal-profile.component";
import {AuthService} from "../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

export interface DialogData {
  name: string;
  surname: string;
  patronymic: string;
  dateOfBirth: string;
  mobile: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public name: any;
  public surname: any;
  public patronymic: any;
  public dateOfBirth: any;
  public mobile: any;

  constructor(public _info: AuthService, public dialog: MatDialog, private router: Router) {

  }

  ngOnInit(): void {
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(ModalProfileComponent, {
      width: '400px',
      data: {
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        dateOfBirth: this.dateOfBirth,
        mobile: this.mobile
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.name = result[0];
      this.surname = result[1];
      this.patronymic = result[2];
      this.dateOfBirth = result[3];
      this.mobile = result[4];
    });
  }
}
