import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetProjectsComponent } from './Project/get-projects/get-projects.component';
import { SaveProjectComponent } from './Project/save-project/save-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import { PopupComponent } from './Project/pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef} from 'primeng/dynamicdialog';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    GetProjectsComponent,
    SaveProjectComponent,
    PopupComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    MatDialogModule,
    FieldsetModule,
    CardModule,
    BrowserAnimationsModule,
    CommonModule,
    DynamicDialogModule,
    ToastModule
  ],
  providers: [ServiceService, DialogService, DynamicDialogRef, DynamicDialogConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
