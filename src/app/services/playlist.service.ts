import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from '../track';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  public track;

  constructor(private http: HttpClient) { }

  addToPlaylist(trackAdd) : Observable<any>{
    this.track  = new Track(6, trackAdd.name, trackAdd.url);
    return this.http.post<any>('http://localhost:8080/track-service/api/v1/track', this.track)
  }

  getPlaylist() : Observable<any>{
 
    return this.http.get<any>('http://localhost:8080/track-service/api/v1/track');
  }
}
