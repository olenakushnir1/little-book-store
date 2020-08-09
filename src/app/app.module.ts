import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelComponent } from './components/panel/panel.component';

import { BooksService } from './services/books.service';
import { IdService } from './services/id.service';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddBookComponent,
    EditBookComponent,
    NavbarComponent,
    NotFoundComponent,
    PanelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    BooksService,
    IdService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
