


class App extends React.Component {
  
  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      users: []
    }

    this.changePage = this.changePage.bind(this);
    this.addUser = this.addUser.bind(this);
    this.updateUsersList = this.updateUsersList.bind(this);
  }


  /**
   * Change Page
   */
  changePage(page) {
    this.setState({...this.state,  page: page });
  }


  /**
   * Add User
   */
  addUser(user) {
    let state = this.state;
    state.users.push(user);
    this.setState(state);
  }


  /**
   * Update users list
   */
  updateUsersList(users) {
    this.setState({...this.state, users: users});
  }


  /**
   * Render Page
   */
  render() {
    return (
      <div>
        <Nav data={this.state} changePage={this.changePage} />
        
        {this.state.page == '' || this.state.page == 'dashboard' ? 
          <Dashboard />
          : null
        }

        {this.state.page == 'users' ? 
            <Users data={this.state} updateUsersList={this.updateUsersList} addUser={this.addUser} />
          : null
        }

        {this.state.page == 'settings' ? 
            <main role="main">
              <div className="container">
                <h1>Settings page</h1>
              </div>
            </main>
          : null
        }   


      </div>
    )
  }
}


/**
 * Mount component to #root
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);