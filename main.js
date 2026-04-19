// Objectni chuqur nusxalash (deep copy)
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;

    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }
    return copy;
}

console.log(deepClone({a:1, b:{c:2}}));
// Funksiyani kechiktirib ishlatish (debounce)
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const f = debounce(() => console.log("Run"), 1000);
f(); f(); f();
