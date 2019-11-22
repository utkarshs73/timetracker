import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-timerecord-add',
  templateUrl: './timerecord-add.component.html',
  styleUrls: ['./timerecord-add.component.scss']
})
export class TimeRecordAddComponent implements OnInit {

  timerecordForm: FormGroup;
  email = '';
  start_time = '';
  end_time = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.timerecordForm = this.formBuilder.group({
      'email' : [null, Validators.required],
      'start_time' : [null, Validators.required],
      'end_time' : [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addTimeRecord(this.timerecordForm.value)
      .subscribe((res: any) => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/timerecords']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}

