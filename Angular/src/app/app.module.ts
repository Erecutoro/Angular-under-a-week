import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './profile/about/about.component';
import { EducationComponent } from './profile/education/education.component';
import { HobbyComponent } from './profile/hobby/hobby.component';
import { ProjectComponent } from './project/project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    EducationComponent,
    HobbyComponent,
    ProjectComponent,
    NavbarComponent,
    BottomNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
