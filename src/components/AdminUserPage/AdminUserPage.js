import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminUserPage extends Component {
    state = {
        status: true
    }

    componentDidMount() {
        this.getAdminUser();
    }

    getAdminUser = () => {
        this.props.dispatch({
            type: 'FETCH_ADMIN_USER'
        });
        console.log('in getAdminUser');
    }

    handleClick = () => {
        this.setState({
            status: true
        })
    }

    handleClick2 = () => {
        this.setState({
            status: false
        })
    }

    handleClick3 = () => {
    }

    approveUser = (data) => {
        this.props.dispatch({
            type: 'APPROVE_USER',
            payload: data
        });
        this.props.dispatch({
            type: 'FETCH_ADMIN_USER'
        })
        console.log('in approveUser');
    }

    unApproveUser = (data) => {
        this.props.dispatch({
            type: 'UNAPPROVE_USER',
            payload: data
        });
        this.props.dispatch({
            type: 'FETCH_ADMIN_USER'
        })
        console.log('in unApproveUser');
    }

    approveAdmin = (data) => {
        this.props.dispatch({
            type: 'APPROVE_ADMIN',
            payload: data
        });
        // this.props.dispatch({
        //     type: 'FETCH_ADMIN_USER'
        // })
        console.log('in approveAdmin');
    }

    deleteUser = (data) => {
        this.props.dispatch({
            type: 'DELETE_ADMIN_USER',
            payload: data
        });
        console.log('in deleteUser');
    }

    render() {
        if (this.props.user.user_type == 1) {
            return (
                <div className='container'>
                    <h1>Admin List of All Users</h1>
                    <h4>
                        Welcome "<b>{this.props.user.first_name}</b> <b>{this.props.user.last_name}</b>",
                    </h4>
                    <button onClick={this.handleClick2}>Pending Approval</button>
                    <button onClick={this.handleClick}>Approved Users</button>
                    <div className='user'>
                        Here is where listings or favorites go: <br />
                        {this.state.status ? (
                            <div>

                                {this.props.reduxState.adminUserReducer.map(user => (
                                    <div key={user.id} className="approved" >
                                        {user.first_name} {user.last_name} {user.user_type == 1 && 'is already an administrator'}
                                        <button onClick={() => this.unApproveUser(user)}>Unapprove User</button>
                                        <button onClick={() => this.approveAdmin(user)}>Approve Admin</button>
                                        <button onClick={() => this.deleteUser(user)}>Delete</button><br />
                                    </div>
                                ))}

                            </div>
                        ) : (
                            <div>
                                {this.props.reduxState.adminUnapprovedUserReducer.map(unapprovedUser => (
                                    <div key={unapprovedUser.id} className="unapproved" >
                                        {unapprovedUser.first_name} {unapprovedUser.last_name} {unapprovedUser.user_type == 1 && 'is already an administrator'}
                                        <button onClick={() => this.approveUser(unapprovedUser)}>Approve User</button>
                                        <button onClick={() => this.approveAdmin(unapprovedUser)}>Approve Admin</button>
                                        <button onClick={() => this.deleteUser(unapprovedUser)}>Delete</button><br />
                                    </div>
                                ))}
                            </div>)}
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    <h1>You are not admin and do not have permission to see this content.</h1>
                </>
            )
        }
    }
}

const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState,
    user: reduxState.user
});
export default connect(mapStateToProps)(AdminUserPage);
