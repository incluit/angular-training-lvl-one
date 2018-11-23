import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomQuoteComponent } from './random.quotes.component';

const routes: Routes = [
  {
    path: '',
    component: RandomQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomQuoteRoutingModule { }
