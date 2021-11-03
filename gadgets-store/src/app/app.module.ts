import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {AuthorizedFormComponent} from './authorized-form/authorized-form.component';
import {AnimationComponent} from './authorized-form/animation/animation.component';
import {ShiningTextComponent} from './authorized-form/shining-text/shining-text.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {RouterTestingModule} from "@angular/router/testing";
import {MainComponent} from './main/main.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule} from "@angular/material/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MainSliderComponent} from './main/main-slider/main-slider.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {CardsComponent} from './main/cards/cards.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {RegistrationFormComponent} from './authorized-form/registration-form/registration-form.component';
import {SingInComponent} from './authorized-form/sing-in/sing-in.component';
import {BenefitsComponent} from './main/benefits/benefits.component';
import {BlogComponent} from './main/blog/blog.component';
import {MailingComponent} from './main/mailing/mailing.component';
import {SamsungReviewComponent} from './main/blog/samsung-review/samsung-review.component';
import {PlaystationReviewComponent} from './main/blog/playstation-review/playstation-review.component';
import {JblReviewComponent} from './main/blog/jbl-review/jbl-review.component';
import {AppleReviewComponent} from './main/blog/apple-review/apple-review.component';
import {WetPhoneReviewComponent} from './main/blog/wet-phone-review/wet-phone-review.component';
import {ModalCardsComponent} from './main/modal-cards/modal-cards.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AboutCompanyComponent} from './main/about-company/about-company.component';
import {DeliveryComponent} from './main/delivery/delivery.component';
import {ContactsComponent} from './main/contacts/contacts.component';
import {NgScrollbarModule} from "ngx-scrollbar";
import { StorageOfPackagingComponent } from './main/storage-of-packaging/storage-of-packaging.component';
import { ReturnsComponent } from './main/returns/returns.component';
import { ProfileComponent } from './main/profile/profile.component';
import { ModalProfileComponent } from './main/modal-profile/modal-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizedFormComponent,
    AnimationComponent,
    ShiningTextComponent,
    MainComponent,
    MainSliderComponent,
    CardsComponent,
    RegistrationFormComponent,
    SingInComponent,
    BenefitsComponent,
    BlogComponent,
    MailingComponent,
    SamsungReviewComponent,
    PlaystationReviewComponent,
    JblReviewComponent,
    AppleReviewComponent,
    WetPhoneReviewComponent,
    ModalCardsComponent,
    AboutCompanyComponent,
    DeliveryComponent,
    ContactsComponent,
    StorageOfPackagingComponent,
    ReturnsComponent,
    ProfileComponent,
    ModalProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterTestingModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatSidenavModule,
    MatMenuModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    NgScrollbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
