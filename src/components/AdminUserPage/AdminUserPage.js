import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './AdminUserPage.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
                     <Button color="primary" onClick={this.handleClick2}>Pending Approval</Button>
                    <Button color="primary" onClick={this.handleClick}>Approved Users</Button>
                    {this.state.status ? (<h1>Approved Users:</h1>) : (<h1>Users Pending Approval:</h1>)}
                    <TableContainer className="user" component={Paper}>
                        <Table className="table" aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">First Name</TableCell>
                                    <TableCell align="center">Last Name</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Phone Number</TableCell>
                                    <TableCell align="center">Remove User</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="center">Approve Admin</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.status ? (
                                    <>

                                        {this.props.reduxState.adminUserReducer.map(user => (


                                            <TableRow key={user.id} className="approved" >
                                                <TableCell align="center">{user.first_name}</TableCell>
                                                <TableCell align="center">{user.last_name}</TableCell>
                                                <TableCell align="center">{user.username}</TableCell>
                                                <TableCell align="center">{user.phone_number}</TableCell>
                                                <TableCell align="center"><Button variant="contained" color="secondary" onClick={() => this.deleteUser(user)}>Delete</Button><br /></TableCell>
                                                <TableCell align="center"><Button variant="outlined" color="secondary" onClick={() => this.unApproveUser(user)}>Unapprove User</Button></TableCell>
                                                <TableCell align="center">{user.user_type == 1 ? (<Button variant="outlined" disabled>Administrator</Button>) : <Button variant="outlined" onClick={() => this.approveAdmin(user)}>Make Admin</Button>}</TableCell>
                                            </TableRow>

                                            // 
                                        ))}

                                    </>
                                ) : (
                                        <>
                                            {this.props.reduxState.adminUnapprovedUserReducer.map(unapprovedUser => (
                                                <TableRow key={unapprovedUser.id} className="unapproved" >
                                                    <TableCell align="center">{unapprovedUser.first_name}</TableCell>
                                                    <TableCell align="center">{unapprovedUser.last_name}</TableCell>
                                                    <TableCell align="center">{unapprovedUser.username}</TableCell>
                                                    <TableCell align="center">{unapprovedUser.phone_number}</TableCell>
                                                    <TableCell align="center"><Button variant="contained" color="secondary" onClick={() => this.deleteUser(unapprovedUser)}>Delete</Button></TableCell>
                                                    <TableCell align="center"><Button variant="outlined" color="primary" onClick={() => this.approveUser(unapprovedUser)}>Approve User</Button></TableCell>
                                                    <TableCell align="center"><Button variant="outlined" onClick={() => this.approveAdmin(unapprovedUser)}>Make Admin</Button></TableCell>

                                                </TableRow>
                                            ))}
                                        </>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
