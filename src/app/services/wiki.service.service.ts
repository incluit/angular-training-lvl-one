import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(
    private http: HttpClient
  ) { }

  getWikiArticles(query: string): Observable<Page[]> {
    let params = new HttpParams();
    params = params.append('action', 'query');
    params = params.append('format', 'json');
    params = params.append('gpssearch', query);
    params = params.append('generator', 'prefixsearch');
    params = params.append('origin', '*');

    return this.http.get(environment.API.wikiURL, { params }).pipe(
      map((results: IWikiResults) => {
        const page = [];
        const { pages = {} } = results.query || {};
        Object.keys(pages).map(key => page.push(pages[key]));
        return page;
      })
    );
  }
}

interface IWikiResults {
  batchcomplete: string;
  continue: Continue;
  query: Query;
}

interface Continue {
  gpsoffset: number;
  continue: string;
}

interface Query {
  pages: { [key: string]: Page };
}

export interface Page {
  pageid: number;
  ns: number;
  title: string;
  index: number;
}
