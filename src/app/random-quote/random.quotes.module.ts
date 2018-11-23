import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RandomQuoteRoutingModule } from './random.routing.module';
import { RandomQuoteComponent } from './random.quotes.component';

@NgModule({
    declarations: [
        RandomQuoteComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RandomQuoteRoutingModule
    ],
})
export class RandomQuoteModule { }
