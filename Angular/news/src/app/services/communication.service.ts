import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

    filterText: string;

    onApplyFilter: EventEmitter<string> = new EventEmitter<string>();

    setFilet(filterText: string): any {
        this.filterText = filterText;
        this.onApplyFilter.emit(this.filterText);
    }

  constructor() { }
}
