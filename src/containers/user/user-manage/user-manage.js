import React from "react";
import { connect } from "react-redux";
import { selectUser } from "../../../actions/userAction";
import { updateUser } from "../../../actions/userAction";

class UserManage extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.id = this.props.match.params.id;
        this.props.dispatch(selectUser(this.id));

    }

    handleChange(e) {
        this.props.user.first_name = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.getFirstName.value);
        // I am nt getting, how to redirect after successful api call :-)
        this.props.dispatch(updateUser(this.id, this.getFirstName.value, () => {
            this.props.history.push('/users');
        }));
    }

    render() {
        const { error, loading, user } = this.props;
        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>


                <h3>
                    User Manage -
                    {user.id}
                </h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" defaultValue={this.props.user.first_name} name="first_name" ref={(input) => this.getFirstName = input} />
                    <button>Save</button>
                </form>

            </div>
        );
    }


}

// export default UserList;
const mapStateToProps = state => {
    return ({
        user: state.users.selected,
        loading: state.users.selecting,
        error: state.users.select_error
    })
};

export default connect(mapStateToProps)(UserManage);

