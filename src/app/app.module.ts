import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { StudentService} from './student.service';
import{ReactiveFormsModule} from '@angular/forms';
import { AddstudComponent} from './addstud/addstud.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayStudentComponent,
    AddstudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
