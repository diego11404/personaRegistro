import { Injectable } from '@angular/core';
import { Persona } from "./persona";
import { Observable, of, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  apiURL = 'http://localhost:8080'
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'json': 'true'
    }),
    withCredentials: true
  }  

  constructor(private http: HttpClient) { }

  getPersona(id: number) : Observable<Persona> {
    return this.http.get<Persona>(this.apiURL + '/persona/'+id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  getPersonas() : Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiURL + '/persona/all', this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  createPersona(persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiURL + '/persona/add', JSON.stringify(persona), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  updatePersona(persona): Observable<Persona> {
    return this.http.put<Persona>(this.apiURL + '/persona/update/' + persona.idpersona, JSON.stringify(persona), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deletePersona(id){
    return this.http.delete<Persona>(this.apiURL + '/persona/delete/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error) {
    console.log(error)
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.error.code}\nMessage: ${error.error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
