export default class CategoryFilter {
    constructor (parentId, onChanged, categories) {
        this.parentId = parentId;
        this.categories = categories;
        this.onChanged = onChanged;
    };

    draw() {
        const html = 
            `<span class="col s2">Choose categories:</span>` + 
            this.categories.map(cat => `
            <label class="col s2">
                <input type="checkbox" value="${cat.id}" class="filled-in" checked="checked" />
                <span>${cat.name}</span>
            </label>`)
            .join("");

        document.getElementById(this.parentId).innerHTML = html;
    };
}