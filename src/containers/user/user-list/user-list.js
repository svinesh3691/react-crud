import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../../actions/userAction";
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from "redux";

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {

        const { error, loading, users } = this.props;
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
                        <li key={a.id}>{a.first_name} <Link to={`/user/${a.id}`}>Edit</Link></li>
                    )}
                </ul>
            </div>
        );
    }


}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers
}, dispatch)

// export default UserList;
const mapStateToProps = state => {
    return ({
        users: state.users.items,
        loading: state.users.loading,
        error: state.users.error
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

