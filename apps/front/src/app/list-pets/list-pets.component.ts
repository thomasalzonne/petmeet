import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetModel } from 'libs/pet/src';

@Component({
  selector: 'petmeet-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {
  pets : PetModel[]= []
  constructor( private http: HttpClient) { 
    http.get('/api/pets').subscribe((res : any) => {
      this.pets = res
    })
  }

  ngOnInit(): void {
  }

}
