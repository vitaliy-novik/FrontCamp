import { Truncate } from '../Utils.js';

export default class SourcesFilter {
    constructor(parentId) {
        this.parentId = parentId;
    };

    draw(sources) {
        const html = 
            `<span class="col s2">Choose sources:</span>` + 
            sources.map(source => `
            <label class="col s2">
                <input type="checkbox" value="${source.id}" class="filled-in" checked="checked" />
                <span>${Truncate(source.name, 2)}</span>
            </label>`)
            .join("");
        
        document.getElementById(this.parentId).innerHTML = html;
    };
}