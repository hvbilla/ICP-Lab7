import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;
  displayedColumns = ['Customer_Name', 'Customer_LastName', 'Customer_id' ,'Customer_Email','Customer_Age','Customer_Gender','Customer_ZipCode','Customer_Address'];
  dataSource = new BookDataSource(this.api);

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getBooks()
      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }
}

export class BookDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getBooks();
  }

  disconnect() {

  }
}
