"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getUsers() {
    const res = await fetch('https://dummyjson.com/users');
    if (!res.ok) {
        throw new Error('HTTP error');
    }
    const data = await res.json();
    console.log(data);
    return data;
}
getUsers();
//# sourceMappingURL=app.js.map