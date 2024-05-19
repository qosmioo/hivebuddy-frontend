const URL = "http://localhost:5062";

export const sendLoginRequest = async (login, password) => {
    const response = await sendApiRequest("/api/auth/login" + "?email=" + login + "&password=" + password,
        'POST');

    return await response.json();
}

export const getTeamsByUserId = async (userId) => {
    const response = await sendApiRequest("/api/groups/" + userId);
    return await response.json();
}

export const getTeamById = async (teamId) => {
    const response = await sendApiRequest("/api/groups/" + teamId);
    return await response.json();
}

export const getUserById = async (userId) => {
    const response = await sendApiRequest("/api/getUser/" + userId);
    return await response.json();
}

export const postPost = async (post) => {
    const response = await sendApiRequest("/api/post", "POST", post);
    return await response.json();

}
export const getPostsByGroupId = async (groupId) => {
    const response = await sendApiRequest("/api/posts/" + groupId);
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

export const PostTeam = async (group) => {
    const response = await sendApiRequest("/api/group", "POST", group);
    return await response.json();
}

export const PutTeam = async (group) => {
    const response = await sendApiRequest("/api/group/" + group.id, "PUT", group);
    return await response.json();
}

export const DeleteTeam = async (groupId) => {
    const response = await sendApiRequest("/api/group/" + groupId, "DELETE");
    return await response.json();
}

export const postTask = async (task) => {
    const response = await sendApiRequest("/api/task", "POST", task);
    return await response.json();
}

export const getUsersByGroupId = async (groupId) => {
    const response = await sendApiRequest("/api/group/" + groupId + '/users');
    return await response.json();
}

export const postPostFeedback = async(postFeedback) => {
    const response = await sendApiRequest("/api/postsFeedback", "POST", postFeedback);
    return await response.json();
}

export const getTasksByGroupId = async(groupId) => {
    const response = await sendApiRequest("/api/task/group/" + groupId)
    return await response.json();
}

export const putUserById = async (userId, user) => {
    const response = await sendApiRequest("/api/getUser/" + userId, "PUT", user);
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