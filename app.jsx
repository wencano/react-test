


class App extends React.Component {
  
  /**
   * Constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      page: ''
    }

    this.changePage = this.changePage.bind(this);

  }


  /**
   * Change Page
   */
  changePage(page) {
    this.setState({...this.state,  page: page });
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
            <main role="main">
              <div className="container">
                <h1>Users page</h1>
              </div>
            </main>
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