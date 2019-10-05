import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example001Component } from './examples/example001/example001.component';
import { Example002Component } from './examples/example002/example002.component';
import { Example003Component } from './examples/example003/example003.component';

const routes: Routes = [
  { path: 'example-001', component: Example001Component },
  { path: 'example-002', component: Example002Component },
  { path: 'example-003', component: Example003Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
