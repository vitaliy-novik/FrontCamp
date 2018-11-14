export function Loading(elementId) {
    document.getElementById(elementId).innerHTML = `
        <div class="progress">
            <div class="indeterminate"></div>
        </div>`;
};

export function Truncate(text, wordsCount) {
    let words = text.split(" ");
    if (wordsCount >= words.length){
        return text;
    }

    let result = "";
    for (let i = 0; i < wordsCount; i++) {
        result += words[i] + " ";
    }

    if (wordsCount < words.length) {
        result += "…";
    }

    return result;
}