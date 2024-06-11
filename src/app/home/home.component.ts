import { Component } from '@angular/core';
import artistdisplayData from '../home/artist-display.json';

interface ArtistDisplay {
  id: number;
  name: string;
  title: string;
  price: number;
  photo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  name = 'Angular';

  artistdisplays: ArtistDisplay[] = artistdisplayData;
}
