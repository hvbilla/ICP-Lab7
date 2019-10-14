import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  CustomDetailsForm: FormGroup;
  Customer_Name: string = '';
  Customer_LastName: string = '';
  Customer_id: string = '';
  Customer_Age: string = '';
  Customer_Email: string = '';
  Customer_Gender: string = '';
  Customer_Address: string = '';
  Customer_ZipCode: string = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.CustomDetailsForm = this.formBuilder.group({
      'Customer_Name': [null, Validators.required],
      'Customer_LastName': [null, Validators.required],
      'Customer_id': [null, Validators.required],
      'Customer_Age': [null, Validators.required],
      'Customer_Email': [null, Validators.required],
      'Customer_Gender': [null, Validators.required],
      'Customer_ZipCode': [null, Validators.required],
      'Customer_Address': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postBook(form)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
}
