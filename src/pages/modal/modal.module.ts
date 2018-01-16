import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPage } from './modal';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
    ReactiveFormsModule
  ],
})
export class ModalPageModule {}
