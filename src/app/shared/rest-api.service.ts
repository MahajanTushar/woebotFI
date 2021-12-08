import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BotMessage } from './BotMessage';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getParentQuestions(): Observable<BotMessage> {
    return this.http.get<BotMessage>(this.apiURL + '/woebot/parent/messages')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getParentComponentDetails(id): Observable<BotMessage> {
    return this.http.get<BotMessage>(this.apiURL + '/woebot/message/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  addAnswer(botmessage): Observable<BotMessage> {
    return this.http.post<BotMessage>(this.apiURL + '/woebot/add/message', JSON.stringify(botmessage), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  getAnsersForAParent(id): Observable<BotMessage> {
    return this.http.get<BotMessage>(this.apiURL + '/woebot/answers/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update employee
  // updateEmployee(id, message): Observable<BotMessage> {
  //   return this.http.put<BotMessage>(this.apiURL + '/woebot/add/message' + id, JSON.stringify(message), this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // HttpClient API delete() method => Delete employee
  // deleteEmployee(id){
  //   return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}