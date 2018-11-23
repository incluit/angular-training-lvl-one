import { Component, OnInit } from '@angular/core';
import { RandomQuoteService, Quotes } from '../services/random.quote.service';

@Component({
  selector: 'random-quotes',
  templateUrl: './random.quotes.component.html',
  styleUrls: ['./random.quotes.component.scss']
})
export class RandomQuoteComponent implements OnInit {
  quote: Quotes;
  constructor(private randomQuoteService: RandomQuoteService) { }

  ngOnInit() {
    this.getQuote();
  }


  getQuote() {
    this.randomQuoteService.getRandomQuote().subscribe(quote => this.quote = quote);
  }

}
