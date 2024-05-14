const URL = "http://localhost:5062";

export const sendLoginRequest = async (login, password) => {
    const response = await sendApiRequest("/api/auth/login" + "?email=" + login + "&password=" + password,
        'POST');

    return await response.json();
}

export const getTeams = async () => {
    const response = await sendApiRequest("/api/group");
    return await response.json();
}

export const getPosts = async () => {
    const response = await sendApiRequest("/api/post");
    return await response.json();
}

export const getPostById = async (id) => {
    const response = await sendApiRequest("/api/post/" + id);
    return await response.json();
}

export const getCommentsByPostId = async (postId) => {
    const response = await sendApiRequest("/api/feedback/" + postId);
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