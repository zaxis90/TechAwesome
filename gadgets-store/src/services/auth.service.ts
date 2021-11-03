import { Injectable } from '@angular/core';

interface User {
  name: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: User | null = null;

  constructor() {
    if(!localStorage.hasOwnProperty('users')){
      localStorage.setItem('users', JSON.stringify([{
        name: 'admin',
        email: 'admin@mail.com',
        password: 'admin'
      }]))
    }
  }

  authUser(email: string, password: string) {
    const savedUsers = localStorage.getItem('users');
    if(!savedUsers) return alert('такого пользователя не существует');
    const users = JSON.parse(savedUsers);
    const user = users.find((u: User) => u.email === email);
    if (!user) return alert('такого пользователя не существует');
    if (user.password !== password) return alert('не верный логин или пароль');
    this.currentUser = user;
  }

  addUser(name: string, email: string, password: string) {
    if (!name || !email || !password) return alert('400 Необходимо заполнить все поля');
    console.log(name, email,password)
    const savedUsers = localStorage.getItem('users');
    const users = savedUsers ? JSON.parse(savedUsers) : [];
    if(users.find((u: User) => u.email === email)) return alert('400 Email уже используется')
    users.push({
      name, email, password
    });
    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify(users));
  }

}
