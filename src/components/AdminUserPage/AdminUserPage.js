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
    render() {
        return (
            <div className='container'>
                <h1>Admin List of All Users</h1>
                <button onClick={this.handleClick}>Approved Users</button>
                <button onClick={this.handleClick2}>Unapproved Users</button>
                <div className='user'>
                    Here is where listings or favorites go. <br />
                    {this.state.status ? (
                        <div>
                            {this.props.reduxState.adminUserReducer.map(activeUser => (
                                <div key={activeUser.id} className="active" >
                                    {activeUser.first_name} {activeUser.last_name}<br />
                                </div>
                            ))}
                        </div>
                    ) : (
                            <div>
                                {this.props.reduxState.adminUserReducer.map(inactiveUser => (
                                    <div key={inactiveUser.id} className="inactive" >
                                        {inactiveUser.username}<br />
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