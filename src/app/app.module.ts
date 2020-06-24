import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoinBrlComponent } from './bitcoin-brl/bitcoin-brl.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
import { FireListComponent } from './fire-list/fire-list.component';
import { FireQuestionComponent } from './fire-question/fire-question.component';


@NgModule({
  declarations: [
    AppComponent,
    BitcoinComponent,
    BitcoinBrlComponent,
    IndexComponent,
    ListComponent,
    FireListComponent,
    FireQuestionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
