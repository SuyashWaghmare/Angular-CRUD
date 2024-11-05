import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [
    StudentRegistrationComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CrudModule { }
