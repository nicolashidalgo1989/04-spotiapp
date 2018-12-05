import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class SpotifyService {

  constructor ( private http:HttpClient, private httpHeaders:HttpHeaders ) { 

    console.log('spotify service ok');
  
  }

  getNewReleases(){

    const headers =  new HttpHeaders({

      'Authorization' : 'Bearer BQAu3ae0pt_oWPylOkxWSJVTcXeQ7fQj60Xo5V18JbLRZINsSuDPPV5ZlNg5Q8psTo-oHvd6SbqklrNDvsQ'

    });

    this.http.get( 'https://api.spotify.com/v1/browse/new-releases&limit=20', { headers } ).subscribe( data => {
      
      console.log(data);

    });

  }

}
