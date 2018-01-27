import { Injectable } from '@angular/core';
import { Fruitlist, ListOfFruitEntity } from './interfaces/fruitlist.interface';
import { ABFRUITS } from './mock-data/mock-fruit';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders
// }

@Injectable()
export class FruitydataService {
  constructor(
    private http: HttpClient
  ) { }
  private abfruitsURL = 'api/abfruits'; // URL to web api
  private fruitdetailsURL = 'api/fruitdetails'; // URL to web api

  getFruitAtoB(): Observable<Fruitlist[]> {
    return this.http.get<Fruitlist[]>(this.abfruitsURL)
      .pipe(
        catchError(this.handleError('getFruitAtoB', []))
      );
  }
  /* Get fruits by id. Will 404 if id not found */
  getChosenFruit(id: string): Observable<any[]> {
    const url = `${this.abfruitsURL}/${id}`;
    return this.http.get<any[]>(url);
  }

  getChosenFruitDetails(name: string): Observable<ListOfFruitEntity> {
    const urlFruit = `${this.fruitdetailsURL}/${name}`;
    return this.http.get<any>(urlFruit);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
