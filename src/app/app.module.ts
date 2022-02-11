import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAnalyticsModule} from "@angular/fire/analytics";
import {AngularFireMessagingModule} from "@angular/fire/messaging";
import {BUCKET} from "@angular/fire/storage";

const environmentOriginal: any = environment;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environmentOriginal.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }