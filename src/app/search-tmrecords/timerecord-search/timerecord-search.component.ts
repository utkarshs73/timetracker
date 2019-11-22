import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timerecord-search',
  templateUrl: './timerecord-search.component.html',
  styleUrls: ['./timerecord-search.component.css']
})
export class TimerecordSearchComponent implements OnInit {

  // isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    // this.isLoadingResults = true;
    // this.api.searchTimeRecord(this.searchRecordForm.value)
    //   .subscribe((res: any) => {
    //       const id = res.id;
    //       this.isLoadingResults = false;
    //       this.router.navigate(['/timerecords']);
    //     }, (err: any) => {
    //       console.log(err);
    //       this.isLoadingResults = false;
    //     });
  }

}
