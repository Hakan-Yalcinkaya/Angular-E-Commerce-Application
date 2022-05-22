import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, Observable, tap,throwError } from 'rxjs';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/categories";
  getCategories():Observable<Category[]>{
    return this.http
    .get<Category[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError)
    );

  }
  handleError(err:HttpErrorResponse) {
    let errorMessage=""
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir Hata Oluştu"+err.error.message;
    }else{
      errorMessage="Sistemsel Bir Hata";
    }
    return throwError(errorMessage);
  }
}
