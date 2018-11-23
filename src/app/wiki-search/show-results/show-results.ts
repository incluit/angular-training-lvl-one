import { Component, Input } from '@angular/core';

@Component({
    selector: 'show-results',
    templateUrl: 'show-results.html'
})

export class ShowResultsComponent {
    @Input() data: Array<any>;
    constructor() { }

}
