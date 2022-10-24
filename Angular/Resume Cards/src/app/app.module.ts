import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalCardComponent } from './normal-card/normal-card.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListsCardComponent } from './lists-card/lists-card.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalCardComponent,
    ProfileCardComponent,
    NavBarComponent,
    ListsCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
