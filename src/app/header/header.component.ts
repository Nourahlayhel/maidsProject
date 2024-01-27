import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { search } from './searchState/search.action';
import { SearchState } from './searchState/search.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() showSearchBox: boolean = true;
  @ViewChild('searchInputRef') searchInputRef!: ElementRef<HTMLInputElement>;

  searchKey$ = this.store.pipe(select('search', 'searchKey'));
  searchTimeout: any;

  constructor(private store: Store<{ search: SearchState }>) {}

  onKeyUp() {
    this.searchTimeout = setTimeout(() => {
      this.emitSearchKey();
    }, 300);
  }

  emitSearchKey() {
    let searchKey = this.searchInputRef.nativeElement.value;
    this.store.dispatch(search({ searchKey }));
  }

  onKeyDown() {
    this.searchTimeout = null;
  }
}
