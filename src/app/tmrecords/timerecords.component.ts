import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TimeRecord } from '../timerecord';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-timerecords',
  templateUrl: './timerecords.component.html',
  styleUrls: ['./timerecords.component.scss']
})
export class TimeRecordsComponent implements OnInit {

  searchRecordForm: FormGroup;
  displayedColumns: string[] = ['email', 'start_time', 'end_time'];
  data: TimeRecord[] = [];
  isLoadingResults = true;
  emailSearch = new FormControl('');

  constructor(private api: ApiService, private router: Router, private formBuilder: FormBuilder) { }
  // constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.searchRecordForm = this.formBuilder.group({
      'emailSearch' : [null, Validators.required],
    });

    this.api.getTimeRecords()
      .subscribe((res: any) => {
        this.data = res;
        console.log('first load 00 = ' + this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  onFormSubmit() {
    // this.isLoadingResults = true;
    let searchFilter = this.emailSearch.value;
    console.log('search condition = ' + searchFilter);
    // this.api.searchTimeRecord(this.searchRecordForm.value)
    this.api.searchTimeRecord(searchFilter)
      .subscribe((res: any) => {
        this.data = res;
        console.log('search 111 = ' + this.data);
          // const id = res.id;
          // this.isLoadingResults = false;
          // this.router.navigate(['/timerecords']);
        }, (err: any) => {
          console.log(err);
          // this.isLoadingResults = false;
        });
  }

  searchRecords (email: string) {

    // console.log("search = " + email );

    // this.isLoadingResults = true;
    // this.api.searchTimeRecord(email)
    //   .subscribe((res: any) => {
    //       const id = res.id;
    //       this.isLoadingResults = false;
    //       // this.router.navigate(['/timerecords']);
    //     }, (err: any) => {
    //       console.log(err);
    //       this.isLoadingResults = false;
    //     });
  }

}
