const URL = "127.0.0.1:5062/swagger";
export const sendChatRequest = async () => {
    const response = await sendApiRequest("/api/chat", 'GET');

    return await response.json();
}


export const sendLoginRequest = async (login, password) => {
    const response = await sendApiRequest("/api/auth/login" + "?email=" + login + "&password=" + password,
        'POST');

    return await response.json();
}

const sendApiRequest = async (path, method = "GET", body = "") => {
    return await fetch(URL + path, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: body === "" ? null : JSON.stringify(body),
    });
}