import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable()
export class UsersService{

    users = [
        { name: 'WMF' }
    ]

    constructor(private http: HttpClient) {

    }


    getUsers() {
        return this.http.get<any>('https://randomuser.me/api/?inc=gender%2Cname%2Cpicture%2Clocation&results=8&nat=gb')
            .pipe(map(response => response.results), 
                map(users => {
                    return users.map(user => {
                        return {
                            name: user.name.first + ' ' + user.name.last,
                        }
                    })
                }))
    }

}


export interface UrlResult {
    results: User[];
    info: object;
}
  
export interface User {
    gender: string;
    picture: string;
    name: string;
    location: string;
  }