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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { BackendDataComponent } from './backend-data/backend-data.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    EventsComponent,
    AboutComponent,
    ContactComponent,
    BackendDataComponent,
    ContactDetailComponent,
    ContactListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatPaginatorModule,
    FormsModule,
    MatDatepickerModule,
  ],
  providers: [
    provideAnimationsAsync(), provideNativeDateAdapter(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
