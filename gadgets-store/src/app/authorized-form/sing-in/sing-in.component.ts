import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required]);
  public hide = true;
  public title: string = "Приветствуем";
  public description: string = "Для входа в магазин зарегистрируйтесь или войдите в аккаунт";
  public btnText: any = {
    registration: "Регистрация",
    enter: "Войти"
  }

  constructor(private authService: AuthService) {
  }

  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return '';
    }

    return this.email.hasError('email') ? 'Неверный формат' : '';
  }

  ngOnInit(): void {
  }

  authUser(){
    this.authService.authUser(this.email.value, this.password.value)
  }


}
