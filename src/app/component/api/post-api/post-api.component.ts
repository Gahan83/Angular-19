import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit {

  bookList: any;
  bookObj: any = {
    "id": 0,
    "title": "",
    "description": "",
    "excerpt": "",
    "publishDate": ""
  }
  http = inject(HttpClient); //Angular 16

  constructor(private readonly apiService: ApiService) { }
  ngOnInit() {
  }

  public getBooks(): void {
    this.apiService.loadBooks()
      .subscribe((result: any) => {
        this.bookList = result;
      });
  }

  public postBooks(): void {
    this.apiService.addBooks(this.bookObj)
      .subscribe((result: any) => {
        if (result) {
          alert("Book added successfully");
          this.getBooks();
        }
        else {
          alert("Fail to add a book");
        }
      });
  }

  public editBook(data: any): void {
    this.bookObj = data;
  }

  public updateBook(id: number): void {
    this.apiService.changeBook(id, this.bookObj)
      .subscribe((result: any) => {
        if (result) {
          alert("Book updated successfully");
          this.getBooks();
        }
        else {
          alert("Fail to update a book");
        }
      });
  }

  public deleteBook(id: number): void {
    const confirmDelete = confirm("Are you sure you want to delete this book?");
    if (confirmDelete) {
      this.apiService.removeBook(id)
        .subscribe((result: any) => {
            alert("Book deleted successfully");
            this.getBooks();
        });
    }
  }
}
