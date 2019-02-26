import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ApiService } from '../services/api.service';
import Source from '../models/source';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    sourceId: string;
    sources: Source[];
    filterText: string;

    constructor(
        private apiService: ApiService,
        private communicationService: CommunicationService) {
    }

    onSourceChange(sourceId: string){
        this.sourceId = sourceId;
        let source = this.sources.find((s: any) => s.id == sourceId);
        this.apiService.selectSource(source);
    }

    applyFilter(filterText: string) {
        this.communicationService.setFilet(filterText);
    }

    ngOnInit() {
        this.apiService.getSources().subscribe((data: any) => {
            this.sources = data.sources;
        });
    }
}
