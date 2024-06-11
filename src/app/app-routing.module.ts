import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AboutComponent } from './about/about.component';
import { ArtistsComponent } from './artists/artists.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { BackendDataComponent } from './backend-data/backend-data.component';
 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'db', component: ContactListComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }