"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gender;
(function (Gender) {
    Gender[Gender["female"] = 0] = "female";
    Gender[Gender["male"] = 1] = "male";
})(Gender || (Gender = {}));
async function getUsers() {
    try {
        const res = await fetch('https://dummyjson.com/users');
        if (!res.ok) {
            throw new Error('HTTP error');
        }
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch (error) {
        throw new Error("OMG!");
    }
}
getUsers();
//# sourceMappingURL=app.js.map