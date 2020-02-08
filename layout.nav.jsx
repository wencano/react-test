

class Nav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }

  }



  render() {
    let page = this.props.data.page;

    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="./index.html">{ this.props.sample }</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className={"nav-item "+(page==''||page=='dashboard'? 'active': '')}>
              <a className="nav-link" href="#" onClick={(e)=>this.props.changePage('dashboard')}>Dashboard <span className="sr-only">(current)</span></a>
            </li>
            <li className={"nav-item "+(page=='users'? 'active': '')}>
              <a className="nav-link" href="#" onClick={(e)=>this.props.changePage('users')}>Users</a>
            </li>
            <li className={"nav-item "+(page=='settings'? 'active': '')}>
              <a className="nav-link" href="#" onClick={(e)=>this.props.changePage('settings')}>Settings</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}