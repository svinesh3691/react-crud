export const fetchUsersBegin = () => ({
    type: 'FETCH_USERS_BEGIN'
});

export const fetchUsersSuccess = users => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: { users }
});

export const fetchUsersFailure = error => ({
    type: 'FETCH_USERS_FAILURE',
    payload: { error }
});

export function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersBegin());
        return fetch("https://reqres.in/api/users?page=1")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(fetchUsersSuccess(json.data));
                return json.users;
            })
            .catch(error => dispatch(fetchUsersFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}