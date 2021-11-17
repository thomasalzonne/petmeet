import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {PetModel} from '../../../../libs/pet/src/index'

@Injectable()
export class PetsService {
    constructor(private http: HttpService){}
    private pets : PetModel[] = [
        {
            firstName : 'totz',
            lastName : 'alz',
            birthDate : "1940-01-01T00:00:00.000Z",
            type: "CANARY",
            avatarPictureUrl: "https://lezebre.lu/images/detailed/16/22058-bugs-bunny.png",
            coverPictureUrl: "https://images2.fanpop.com/image/photos/10200000/Bugs-Bunny-bugs-bunny-10229071-600-811.jpg",
            summary: "Some people call me cocky and brash, but actually I am just self-assured. I'm nonchalant, imperturbable, contemplative.\nI play it cool, but I can get hot under the collar. And above all I'm a very 'aware' character. I'm well aware that I am appearing in an animated cartoon....\nAnd sometimes I chomp on my carrot for the same reason that a stand-up comic chomps on his cigar.\nIt saves me from rushing from the last joke to the next one too fast. And I sometimes don't act, I react. And I always treat the contest with my pursuers as 'fun and games.'\nWhen momentarily I appear to be cornered or in dire danger and I scream, don't be consoined – it's actually a big put-on. Let's face it, Doc. I've read the script and I already know how it turns out."
        }
    ]
    private id = 0;

    getById(id:number){
        // return this.pets.find((pet) => pet.id === +id)
    }

    findAll(){
        return this.http.get('https://meetapet-api.herokuapp.com/api/pets')
    }

    create(pet: PetModel){
        console.log(pet)
        this.http.post('https://meetapet-api.herokuapp.com/api/pets',pet).subscribe(() => {})
    }
}
