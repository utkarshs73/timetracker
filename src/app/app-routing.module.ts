import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeRecordsComponent } from './tmrecords/timerecords.component';
import { TimeRecordAddComponent } from './add-tmrecord/timerecord-add.component';

const routes: Routes = [
  {
    path: 'timerecords',
    component: TimeRecordsComponent,
    data: { title: 'List of Time Records' }
  },
  {
    path: 'timerecord-add',
    component: TimeRecordAddComponent,
    data: { title: 'Add Time Record' }
  },
  {
    path: 'timerecord-search',
    component: TimeRecordsComponent,
    data: { title: 'Search Time Record' }
  },
  { path: '',
    redirectTo: '/timerecords',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
