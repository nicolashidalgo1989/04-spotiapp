import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html' 
})
export class PaisesComponent implements OnInit {

  paises:any[] = [];

  constructor( private httpClient:HttpClient ) { 

    console.log('costructor ok');
    this.httpClient.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (data:any) => {
      this.paises = data;
      console.log(data);

    })

  }

  ngOnInit() {
  }

}
