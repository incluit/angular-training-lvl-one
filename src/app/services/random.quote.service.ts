import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RandomQuoteService {

    constructor(
        private http: HttpClient
    ) { }

    getRandomQuote(): Observable<Quotes> {
        return this.http.get<Quotes>(environment.API.quotes);
    }
}

export interface Quotes {
    quote: string;
    author: string;
    cat: string;
}

