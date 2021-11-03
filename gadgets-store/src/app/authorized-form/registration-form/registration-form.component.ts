import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from '../../../services/auth.service'

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public email = new FormControl('', [Validators.required, Validators.email]);
  public name = new FormControl('', [Validators.required]);
  public password = new FormControl('', [Validators.required]);
  public hide = true;
  public title: string = "Регистрация";
  public description: string = "Для регистрации заполните пожалуйста все поля формы";
  public btnText: string = "Зарегистрироваться";

  constructor(private authService: AuthService) {
  }

  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return '';
    }

    return this.email.hasError('email') ? 'Неверный формат' : '';
  }

  registerUser() {

    this.authService.addUser(this.name.value, this.email.value, this.password.value)
  }


  ngOnInit(): void {
  }

}
