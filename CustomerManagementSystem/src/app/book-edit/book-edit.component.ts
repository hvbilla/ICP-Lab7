import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book = {};
  custForm: FormGroup;
  Customer_Name: string = '';
  Customer_LastName: string = '';
  Customer_id: string = '';
  Customer_Email: string = '';
  Customer_Age: string = '';
  Customer_Gender: string = '';
  Customer_ZipCode: string = '';
  Customer_Address: string = '';
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.custForm = this.formBuilder.group({
      'Customer_Name': [null, Validators.required],
      'Customer_LastName': [null, Validators.required],
      'Customer_id': [null, Validators.required],
      'Customer_Email': [null, Validators.required],
      'Customer_Age': [null, Validators.required],
      'Customer_Gender': [null, Validators.required],
      'Customer_ZipCode': [null, Validators.required],
      'Customer_Address': [null, Validators.required]

    });
    this.getBook(this.route.snapshot.params['id']);
  }
  getBookDetails(id) {
    this.api.getBook(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
      });
  }
  onFormSubmit(form: NgForm) {
    let id = this.route.snapshot.params['id'];
    console.log(form)
    this.api.updateBook(id, form)
      .subscribe(res => {
        this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
  getBook(id) {
    this.api.getBook(id).subscribe(data => {
      id = data._id;
      this.custForm.setValue({
        Customer_Name: data.Customer_Name,
        Customer_LastName: data.Customer_LastName,
        Customer_id: data.Customer_id,
        Customer_Email: data.Customer_Email,
        Customer_Age: data.Customer_Age,
        Customer_Gender: data.Customer_Gender,
        Customer_ZipCode: data.Customer_ZipCode,
        Customer_Address: data.Customer_Address
      });
    });
  }
}
