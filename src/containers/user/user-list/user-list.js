import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../../actions/userAction";

class UserList extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.dispatch(fetchUsers());
    }

    render() {

        const { error, loading, users } = this.props;
        console.log(users)
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>

                <h3>
                    User List
            </h3>
                <ul>
                    {users.map(a =>
                        <li key={a.id}>{a.first_name}</li>
                    )}
                </ul>
            </div>
        );
    }


}

// export default UserList;
const mapStateToProps = state => {
    return ({
        users: state.users.items,
        loading: state.users.loading,
        error: state.users.error
    })
};

export default connect(mapStateToProps)(UserList);

