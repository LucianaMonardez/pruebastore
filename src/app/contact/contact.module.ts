import { SharedModule } from './../shared/shared.module';
import { ContactComponent } from './components/contact.component';
import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactRoutingModule} from './contact-routing.module';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    MatInputModule,

  ]
})
export class ContactModule {

}


