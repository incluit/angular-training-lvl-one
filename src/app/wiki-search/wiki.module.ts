import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WikiComponent } from './wiki.component';
import { SearchInputComponent } from './search-input/search-input';
import { ShowResultsComponent } from './show-results/show-results';
import { WikiSearchRoutingModule } from './wiki.routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        WikiComponent,
        SearchInputComponent,
        ShowResultsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        WikiSearchRoutingModule
    ],
})
export class WikiSearchModule { }
