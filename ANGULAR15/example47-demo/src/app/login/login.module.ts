import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { Register1Component } from './register1/register1.component';



@NgModule({
  declarations: [
    RegisterComponent,
    Register1Component
  ],
  imports: [
    CommonModule
  ],
  exports : [
    Register1Component,
    RegisterComponent
  ]
})
export class LoginModule { }
