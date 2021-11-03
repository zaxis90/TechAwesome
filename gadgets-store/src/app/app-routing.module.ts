import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main/main.component"
import {AppComponent} from "./app.component";
import {AuthorizedFormComponent} from "./authorized-form/authorized-form.component";
import {SingInComponent} from "./authorized-form/sing-in/sing-in.component";
import {RegistrationFormComponent} from "./authorized-form/registration-form/registration-form.component";
import {CardsComponent} from "./main/cards/cards.component";
import {MainSliderComponent} from "./main/main-slider/main-slider.component";
import {SamsungReviewComponent} from "./main/blog/samsung-review/samsung-review.component";
import {AppleReviewComponent} from "./main/blog/apple-review/apple-review.component";
import {JblReviewComponent} from "./main/blog/jbl-review/jbl-review.component";
import {PlaystationReviewComponent} from "./main/blog/playstation-review/playstation-review.component";
import {WetPhoneReviewComponent} from "./main/blog/wet-phone-review/wet-phone-review.component";
import {AboutCompanyComponent} from "./main/about-company/about-company.component";
import {DeliveryComponent} from "./main/delivery/delivery.component";
import {AuthGuard} from "../guards/auth.guard";
import {ContactsComponent} from "./main/contacts/contacts.component";
import {StorageOfPackagingComponent} from "./main/storage-of-packaging/storage-of-packaging.component";
import {ReturnsComponent} from "./main/returns/returns.component";
import {ProfileComponent} from "./main/profile/profile.component";

const appRoutes: Routes = [
  {path: 'home', component: AuthorizedFormComponent, children:[
      {path: '', component: SingInComponent},
      {path: 'registration', component: RegistrationFormComponent},
    ]},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'home/main', component: MainComponent,children:[
      {path: '', component: MainSliderComponent},
      {path: 'cards', component: CardsComponent},
      {path: 'playstation', component: PlaystationReviewComponent},
      {path: 'jbl', component: JblReviewComponent},
      {path: 'apple', component: AppleReviewComponent},
      {path: 'phone', component: WetPhoneReviewComponent},
      {path: 'samsung', component: SamsungReviewComponent},
      {path: 'search/:searchTerm', component: CardsComponent},
      {path: 'category/:searchCategory', component: CardsComponent},
      {path: 'actual/:actualCategory', component: CardsComponent},
      {path: 'fav/:favoriteTerm', component: CardsComponent},
      {path: 'basket/:basketTerm', component: CardsComponent},
      {path: 'about', component: AboutCompanyComponent},
      {path: 'delivery', component: DeliveryComponent},
      {path: 'packaging', component: StorageOfPackagingComponent},
      {path: 'returns', component: ReturnsComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'contacts', component: ContactsComponent},
    ], canActivate: [AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
