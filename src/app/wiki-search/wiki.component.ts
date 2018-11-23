import { Component, OnInit, OnDestroy } from '@angular/core';
import { WikiService, Page } from '../services/wiki.service.service';
import { Subject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'wiki-articles',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit, OnDestroy {
  search = '';
  results: Page[];
  wikiSubscription: Subscription;
  private inputSource = new Subject<string>();
  constructor(private wikiService: WikiService) { }

  ngOnInit() {
    this.wikiSubscription =
      this.inputSource.pipe(
        switchMap((input) => this.wikiService.getWikiArticles(input))
      )
        .subscribe(results => {
          this.results = results;
        });
  }

  getResults(input: string) {
    this.inputSource.next(input);
  }

  ngOnDestroy() {
    this.wikiSubscription.unsubscribe();
  }
}
