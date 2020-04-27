import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './AdminUserPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
                    <Button color="primary" onClick={this.handleClick2}>Pending Approval</Button>
                    <Button color="primary" onClick={this.handleClick}>Approved Users</Button>
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
                                                <td><Button variant="contained" color="secondary" onClick={() => this.deleteUser(user)}>Delete</Button><br /></td>
                                                <td><Button variant="outlined" color="secondary" onClick={() => this.unApproveUser(user)}>Unapprove User</Button></td>
                                                <td>{user.user_type == 1 ? ('*Administrator*') : <Button variant="outlined" color="primary" onClick={() => this.approveAdmin(user)}>Make Admin</Button>}</td>
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
                                                    <td><Button variant="contained" color="secondary" onClick={() => this.deleteUser(unapprovedUser)}>Delete</Button></td>
                                                    <td><Button variant="outlined" color="primary" onClick={() => this.approveUser(unapprovedUser)}>Approve User</Button></td>
                                                    <td><Button variant="outlined" color="primary" onClick={() => this.approveAdmin(unapprovedUser)}>Make Admin</Button></td>

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
