import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Page1Component } from './task-1/page.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatCommonModule,
  MatOptionModule,
  MatRippleModule
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card'

export const materialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatCommonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCardModule
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ...materialModules ],
  declarations: [ AppComponent, HelloComponent, Page1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
