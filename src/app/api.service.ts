import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { TimeRecord } from './timerecord';
import { SearchRecord } from './searchrecord';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/timerecords';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTimeRecords(): Observable<TimeRecord[]> {
    return this.http.get<TimeRecord[]>(apiUrl)
      .pipe(
        tap(timerecord => console.log('fetched time records')),
        catchError(this.handleError('getTimeRecords', []))
      );
  }

  searchTimeRecord(email: string): Observable<TimeRecord[]> {
  // searchTimeRecord(searchRecord: SearchRecord): Observable<TimeRecord[]> {
    // const url = `${apiUrl}?email=${searchRecord.email}`;
    const url = `${apiUrl}?email=${email}`;
    console.log('url == ' + url);
    return this.http.get<TimeRecord[]>(url)
      .pipe(
        tap(timerecord => console.log('searched time records')),
        catchError(this.handleError('searchTimeRecords', []))
      );
  }

  addTimeRecord(timeRecord: TimeRecord): Observable<TimeRecord> {
    return this.http.post<TimeRecord>(apiUrl, timeRecord, httpOptions).pipe(
      tap((tmrec: any) => console.log(`addedTtimeRecord w/ id=${tmrec.id}`)),
      catchError(this.handleError<TimeRecord>('addTimeRecord'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
