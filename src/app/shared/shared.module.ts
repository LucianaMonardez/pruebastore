
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './../material/material.module';

import { RouterModule } from '@angular/router';
//import { DemoComponent } from './../demo/demo.component';
import { FooterComponent } from './components/header/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';






@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    FooterComponent,
    HeaderComponent,
    //DemoComponent,


  ], exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    FontAwesomeModule

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FontAwesomeModule,


  ],
})
export class SharedModule {}
