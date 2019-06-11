import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  constructor(private http: HttpClient) { }

  getAllTracks():Observable<any>{
 
    return this.http.get<any>('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&limit=20&api_key=48b14118fa04d83ddf5febd29a3d99bf&format=json');
  }

  getTrackByName(trackName:string):Observable<any>{
    return this.http.get<any>('http://ws.audioscrobbler.com/2.0/?method=track.search&track='+trackName+'&api_key=48b14118fa04d83ddf5febd29a3d99bf&format=json');
  }

}
