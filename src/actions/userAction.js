import axios from 'axios';

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



export const selectUserBegin = () => ({
    type: 'SELECT_USER_BEGIN'
});

export const selectUserSuccess = user => ({
    type: 'SELECT_USER_SUCCESS',
    payload: { user }
});

export const selectUserFailure = error => ({
    type: 'SELECT_USER_FAILURE',
    payload: { error }
});


export function fetchUsers() {
    return dispatch => {
        dispatch(fetchUsersBegin());
        return axios("https://reqres.in/api/users?page=1")
            .then(res => {
                dispatch(fetchUsersSuccess(res.data.data))
            })
            .catch(error => {
                console.log(error);

                dispatch(fetchUsersFailure(error))
            });

    };
}



export function selectUser(id) {
    return dispatch => {
        dispatch(selectUserBegin());
        return axios("https://reqres.in/api/users/" + id)
            .then(res => {
                dispatch(selectUserSuccess(res.data.data))
            })
            .catch(error => {
                console.log(error);

                dispatch(selectUserFailure(error))
            });

    };
}




// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}