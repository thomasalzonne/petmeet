import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PetModel } from 'libs/pet/src';

@Component({
  selector: 'petmeet-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {

  pet : any;
  data = {}
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    summary : new FormControl('')
  });
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.http.post('/api/pets',     {...this.profileForm.value, birthDate: "1940-01-01T00:00:00.000Z",type :"CANARY",avatarPictureUrl :"https://lezebre.lu/images/detailed/16/22058-bugs-bunny.png",coverPictureUrl : "https://images2.fanpop.com/image/photos/10200000/Bugs-Bunny-bugs-bunny-10229071-600-811.jpg" }    ).subscribe(() => {})
  }

}
