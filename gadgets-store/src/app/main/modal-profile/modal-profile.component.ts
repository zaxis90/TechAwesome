import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../profile/profile.component";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.scss']
})
export class ModalProfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, public _info: AuthService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
