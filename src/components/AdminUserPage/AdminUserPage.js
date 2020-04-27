import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './AdminUserPage.css';

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
        window.location.reload();
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
        window.location.reload();
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
        window.location.reload();
    }

    deleteUser = (data) => {
        this.props.dispatch({
            type: 'DELETE_ADMIN_USER',
            payload: data
        });
        console.log('in deleteUser');
        window.location.reload();
    }

    render() {
        if (this.props.user.user_type == 1) {
            return (
                <div className='container'>
                    <h2>
                        Viewing Users as Admin ({this.props.user.first_name})
                    </h2>
                    <button onClick={this.handleClick2}>Pending Approval</button>
                    <button onClick={this.handleClick}>Approved Users</button>
                    {this.state.status ? (<h1>Approved Users:</h1>) : (<h1>Users Pending Approval:</h1>)}
                    <div className='user'>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Remove User</th>
                                <th>Status</th>
                                <th>Approve Admin</th>
                            </tr>
                            </thead>
                            <tbody>
                        {this.state.status ? (
                            <>
                               
                                {this.props.reduxState.adminUserReducer.map(user => (
                                 
                                        
                                        <tr key={user.id} className="approved" >
                                            <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.phone_number}</td>
                                            <td><button onClick={() => this.deleteUser(user)}>Delete</button><br /></td>
                                            <td><button onClick={() => this.unApproveUser(user)}>Unapprove User</button></td>
                                        <td>{user.user_type == 1 ? ('*Administrator*') : <button onClick={() => this.approveAdmin(user)}>Make Admin</button>}</td>
                                       </tr>
                                           
                                        // 
                                ))}

                            </>
                        ) : (
                            <>
                                {this.props.reduxState.adminUnapprovedUserReducer.map(unapprovedUser => (
                                    <tr key={unapprovedUser.id} className="unapproved" >
                                        <td>{unapprovedUser.first_name}</td>
                                        <td>{unapprovedUser.last_name}</td>
                                        <td>{unapprovedUser.username}</td>
                                        <td>{unapprovedUser.phone_number}</td>
                                        <td><button onClick={() => this.deleteUser(unapprovedUser)}>Delete</button></td>
                                        <td><button onClick={() => this.approveUser(unapprovedUser)}>Approve User</button></td>
                                        <td><button onClick={() => this.approveAdmin(unapprovedUser)}>Make Admin</button></td>
                                        
                                    </tr>
                                ))}
                            </>)}
                            </tbody>
                             </table>
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
