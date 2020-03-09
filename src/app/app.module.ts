import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './AppModule/hero/hero.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentListService } from './student-list.service';
import { RouterModule } from '@angular/router';
import { StudentComponent } from './AppModule/student/student.component';
import { StaffComponent } from './AppModule/staff/staff.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ExponentialPipe } from './exponential.pipe';
import { CommonAppModule } from './common-app/common-app.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    StudentComponent,
    StaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonAppModule
  ],
  providers: [StudentListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
