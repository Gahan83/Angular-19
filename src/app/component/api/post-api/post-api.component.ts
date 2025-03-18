import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { TabsComponent } from "../../../reusable/tabs/tabs.component";

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, TabsComponent],
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.css']
})
export class PostApiComponent implements OnInit,AfterViewInit {
  currentTabs: string = 'Car List';
  bookList: any;
  bookObj: any = {
    "id": 0,
    "title": "",
    "description": "",
    "excerpt": "",
    "publishDate": ""
  }
  http = inject(HttpClient); //Angular 16

  @ViewChild('txtCity') cityTextBox:ElementRef | undefined;
  @ViewChild(TabsComponent) tabsComponent: TabsComponent | undefined;
  constructor(private readonly apiService: ApiService) { 
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit',performance.now());
  }
  ngOnInit() {
    this.getBooks();
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

  public onTabChange(tab: string) {
    this.currentTabs= tab;
  }

  public readCityValue()
  {
    const city = this.cityTextBox?.nativeElement.value;
    if(this.cityTextBox)
    {
      this.cityTextBox.nativeElement.style.backgroundColor = 'red';
    }
    const val= this.tabsComponent?.currentTab;
  }
}
