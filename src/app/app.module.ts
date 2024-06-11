import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtistsComponent } from './artists/artists.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from './navbar/navbar.component';
import { BiocolComponent } from './artists/biocol/biocol.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    EventsComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    BiocolComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
