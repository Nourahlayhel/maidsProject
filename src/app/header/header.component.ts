import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, map, distinctUntilChanged, debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() searchText: string | null = '';
  @Output() onSearch = new EventEmitter();

  searchBoxOpened: boolean = false;

  @ViewChild('searchInput') searchInputRef!: ElementRef<HTMLInputElement>;
  constructor() {}

  search(searchKey: any) {
    this.onSearch.emit(searchKey);
  }
  onSearchKeyChange(key: any) {}
  openSearchBox() {
    fromEvent(this.searchInputRef.nativeElement, 'input')
      .pipe(
        map((event: Event) => (<HTMLInputElement>event.target).value),
        debounceTime(600),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.search(value);
      });
  }
  closeSearchBox() {}
}
