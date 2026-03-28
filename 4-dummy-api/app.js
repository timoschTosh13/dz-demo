"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getUsers() {
    const res = await fetch('https://dummyjson.com/users');
    if (!res.ok) {
        throw new Error('HTTP error');
    }
    const data = await res.json();
    return data;
}
console.log(getUsers());
//# sourceMappingURL=app.js.map