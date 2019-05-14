import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

import {DashboardComponent} from './dashboard/dashboard.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { SearchComponent } from './search/search.component';

const config = {
  apiKey: "AIzaSyDQXjQd_Lnp9GrEptyVLaqqiyxvj83G560",
  authDomain: "ionicproject-cefdb.firebaseapp.com",
  databaseURL: "https://ionicproject-cefdb.firebaseio.com",
  projectId: "ionicproject-cefdb",
  storageBucket: "ionicproject-cefdb.appspot.com",
  messagingSenderId: "509332959018"
};

@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent,SearchComponent,DashboardComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule]
    ,
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
