//api.js
export function memberLogin() {
    return new Promise((res) => {
        setTimeout(res({ name: "Edward", token: "AOQGKICVOGJANGO" }), 1000);
    });
}

export function memberLogout() {
    return new Promise((res) => {
        setTimeout(res(true), 1000);
    });
}
