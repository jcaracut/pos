import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-search-bar',
  templateUrl: './custom-search-bar.component.html',
  styleUrls: ['./custom-search-bar.component.scss'],
})
export class CustomSearchBarComponent implements OnInit {

  @Input() isListView: boolean;
  @Input() resultCount: number;
  @Output() changeViewClicked = new EventEmitter<boolean>();
  @Output() searchInput = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  searchProduct(){

  }

  onChangeViewClick(isListView){
    this.isListView = isListView;
    this.changeViewClicked.emit(isListView)
  }

  onSearchInput(evt){
    this.searchInput.emit(evt.srcElement.value);
  }

}
