import { Injectable } from '@angular/core';
import { Fruitlist, ListOfFruitEntity } from "./interfaces/fruitlist.interface";
import { ABFRUITS } from "./mock-data/mock-fruit";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class FruitydataService {
  constructor() { }
  
  getFruitAtoB(): Observable<Fruitlist[]> {
    return of(ABFRUITS);
  }
  /* Get fruits by id. Will 404 if id not found */
  getChosenFruit(id: string): Observable<ListOfFruitEntity[]> {
    for (var i = 0; i < ABFRUITS.length; i++) {
      if (ABFRUITS[i]["id"] == id) {
        return of(ABFRUITS[i]["listOfFruit"]);
      }
    }
  }

  getChosenFruitDetails(name: string): Observable<ListOfFruitEntity> {
    let firstLetter = name.substring(0, 1);
    for (var i = 0; i < ABFRUITS.length; i++) {
      if (ABFRUITS[i]["id"] == firstLetter) {
        let foundList = ABFRUITS[i]["listOfFruit"];
        for (var n = 0; n < foundList.length; n++) {
          if (foundList[n]["name"] == name) {
            return of(ABFRUITS[i]["listOfFruit"][n]);
          }
        }
      }
    }

  }

}
