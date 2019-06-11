import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../services/playlist.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() track: string;

  constructor(private service : PlaylistService) { }

  ngOnInit() {
  }

  addSong(trackAdd){
    // console.log(trackAdd);
    this.service.addToPlaylist(trackAdd).subscribe(data =>{
      console.log(data)
    });
  }
}
