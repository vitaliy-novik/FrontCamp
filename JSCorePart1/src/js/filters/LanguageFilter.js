export default class LanguageFilter {
    constructor(parentId, onChange, languages, defaultLang) {
        this.parentId = parentId;
        this.onChange = onChange;
        this.languages = languages;
        this.defaultLang = defaultLang;
    };

    draw() {
        const html = 
            `<span class="col s2">Choose your language:</span>` + 
            this.languages.map(lang => `
            <label class="col s1">
                <input name="language" type="radio" value="${lang.id}" ${lang.id === this.defaultLang ? "checked" : ""} />
                <span>${lang.name}</span>
            </label>`)
            .join("");

        document.getElementById(this.parentId).innerHTML = html;

        this.bindEventsListeners();
    };

    bindEventsListeners() {
        document.getElementsByName('language').forEach(element => {
            element.onchange = event => this.onChange(event.target.value);
        });
    };
};