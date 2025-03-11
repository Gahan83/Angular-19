import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = "https://fakerestapi.azurewebsites.net/api/v1/Books";
  constructor(private readonly http: HttpClient) { }


  loadBooks() {
    return this.http.get(this.apiUrl);
  }

  addBooks(obj: any) {
    return this.http.post(this.apiUrl, obj)
  }

  changeBook(id: number, obj: any) {
    return this.http.put(`${this.apiUrl}/${id}`, obj)
  }

  removeBook(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
