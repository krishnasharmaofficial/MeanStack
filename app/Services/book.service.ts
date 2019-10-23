import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  getAll():any{
    return this.http.get(this.url);
  }

  find(id):any{
    let tUrl = this.url+'/'+id;
    return this.http.get(tUrl);
  }

  postBook(newBook): any{
    return this.http.post(this.url,newBook);
  }
  
  delete(id): any{
    let tUrl = this.url+'/'+id;
    return this.http.delete(tUrl);
  }
}
