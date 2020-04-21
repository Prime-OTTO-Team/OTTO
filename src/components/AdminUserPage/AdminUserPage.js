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
    approveUser = (data) => {
        this.props.dispatch({
            type: 'APPROVE_USER',
            payload: data
        });
        this.props.dispatch({
            type: 'FETCH_ADMIN_USER'
        })
        console.log('in activate');
    }
    unApproveUser = (data) => {
        this.props.dispatch({
            type: 'UNAPPROVE_USER',
            payload: data
        });
        this.props.dispatch({
            type: 'FETCH_ADMIN_USER'
        })
        console.log('in activate');
    }
    deleteUser = (data) => {
        this.props.dispatch({
            type: 'DELETE_ADMIN_USER',
            payload: data
        });
    }
    render() {
        return (
            <div className='container'>
                <h1>Admin List of All Users</h1>
                <button onClick={this.handleClick}>Current Users</button>
                <button onClick={this.handleClick2}>Pending Approval</button>
                <div className='user'>
                    Here is where listings or favorites go. <br />
                    {this.state.status ? (
                        <div>
                            {this.props.reduxState.adminUserReducer.map(user => (
                                <div key={user.id} className="approved" >
                                    {user.first_name} {user.last_name}
                                    <button onClick={() => this.unApproveUser(user)}>Unapprove User</button>
                                    <button onClick={() => this.deleteUser(user)}>Delete User</button><br />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            {this.props.reduxState.adminUnapprovedUserReducer.map(unapprovedUser => (
                                <div key={unapprovedUser.id} className="unapproved" >
                                    {unapprovedUser.first_name} {unapprovedUser.last_name}
                                    <button onClick={() => this.approveUser(unapprovedUser)}>Approve User</button>
                                    <button onClick={() => this.deleteUser(unapprovedUser)}>Delete User</button><br />
                                </div>
                            ))}
                        </div>)}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxState) => ({
    errors: reduxState.errors,
    reduxState
});
export default connect(mapStateToProps)(AdminUserPage);