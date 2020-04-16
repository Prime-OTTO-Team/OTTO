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
                                    {user.first_name} {user.last_name}<br />
                                </div>
                            ))}
                        </div>
                    ) : (
                            <div>
                                {this.props.reduxState.adminUserReducer.map(unapprovedUser => (
                                    <div key={unapprovedUser.id} className="unapproved" >
                                        {unapprovedUser.username}
                                        <button onClick={() => this.approveUser(unapprovedUser)}>Activate</button><br />
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