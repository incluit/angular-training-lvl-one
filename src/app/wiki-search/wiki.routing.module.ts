import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WikiComponent } from './wiki.component';

const routes: Routes = [
  {
    path: '',
    component: WikiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiSearchRoutingModule { }
