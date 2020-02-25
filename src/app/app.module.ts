import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './AppModule/hero/hero.component';
import { HttpClient } from '@angular/common/http';
import { StudentListService } from './student-list.service';
import { RouterModule } from '@angular/router';
import { StudentComponent } from './AppModule/student/student.component';
import { StaffComponent } from './AppModule/staff/staff.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    StudentComponent,
    StaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [StudentListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
