


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
    this.deleteUser = this.deleteUser.bind(this);
  }


  /**
   * Change Page
   */
  changePage(page) {
    this.setState({...this.state, page: page });
  }


  /**
   * Add User
   */
  addUser(user) {
    let _this = this;
    let state = this.state;
    
    // Update Users DB
    $.get( "http://localhost/npm-test-api/", "task=addUser&newUser=" + JSON.stringify(user), function(res) {

      try {
        res = JSON.parse(res);
        if( res && res.success && res.users ) 
          _this.setState({...state, users: res.users });
      }
      catch(e) {
        console.log("ERROR!", e);
      }

    });

  }


  /**
   * Update users list
   */
  updateUsersList(users) {
    this.setState({...this.state, users: users});
  }


  /**
   * Delete User
   */
  deleteUser(index) {
    let _this = this;
    let state = this.state;

    // Validate
    if( !confirm( 'Are you sure?') ) 
      return false;
    
    // Update Users DB
    $.get( "http://localhost/npm-test-api/", "task=deleteUser&index=" + index, function(res) {
      console.log(" DELETE RES ", res);
      try {
        res = JSON.parse(res);
        if( res && res.success && res.users ) 
          _this.setState({...state, users: res.users });
      }
      catch(e) {
        console.log("ERROR!", e);
      }

    });

    
  }

  
  /**
   * Render Page
   */
  render() {
    return (
      <div>
        <Nav data={this.state} changePage={this.changePage} sample="test sample value" />
        
        {this.state.page == '' || this.state.page == 'dashboard' ? 
          <Dashboard changePage={this.changePage} />
          : null
        }

        {this.state.page == 'users' ? 
            <Users data={this.state} updateUsersList={this.updateUsersList} addUser={this.addUser} changePage={this.changePage} deleteUser={this.deleteUser} />
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


  componentWillMount() {
    let _this = this;
    let state = this.state;

    $.get( "http://localhost/npm-test-api/", "task=getUsers", function(res){
      
      try {
        res = JSON.parse(res);
        console.log("USERS FROM DB ", res);
        if( res && res.success && res.users ) 
          _this.setState({...state, users: res.users });
      }
      catch(e) {
        console.log("ERROR!", e);
      }
      
    });
  }
}


/**
 * Mount component to #root
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);