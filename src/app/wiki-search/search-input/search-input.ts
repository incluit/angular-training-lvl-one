import { Component, EventEmitter, Input, OnDestroy, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
    selector: 'search-input',
    templateUrl: 'search-input.html'
})

export class SearchInputComponent implements OnInit, OnDestroy {
    inputSearch = new FormControl();
    inputSubscription: Subscription;

    @Input() minLength = 3;
    @Input() debounceTime = 400;
    @Output() WritingFinished = new EventEmitter<String>();


    constructor() {
    }
    ngOnInit() {
        this.inputSubscription = this.inputSearch.valueChanges.pipe(
            filter((value) => value !== ''),
            debounceTime(this.debounceTime),
            distinctUntilChanged()
        )
            .subscribe((value) => {
                if (value.length >= this.minLength) {
                    this.WritingFinished.emit(value);
                }
            });
    }

    ngOnDestroy() {
        this.inputSubscription.unsubscribe();
    }

}
