
class Users extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      newUser: null
    }
    
    this.formChange = this.formChange.bind(this);

  }


  formChange(e) {

    let props = this.props;
    let state = this.state;

    let {name, value} = e.target; // e.target.name, e.target.value 

    if(!state.newUser) {
      state.newUser = {};
    }

    state.newUser[name] = value;

    this.setState(state);

  }




  render() {
    let props = this.props;
    let state = this.state; 

    return (
      <main role="main">
        <div className="container">
          
          <h1>Users page</h1>
          
          <button type="button" onClick={()=>this.setState({...this.state, showForm: !this.state.showForm})} className="btn btn-primary">
            <i className="fa fa-plus"></i> Add User
          </button>

          {this.state.showForm ?
            <form style={{marginBottom: 30, marginTop: 30}} onSubmit={(e)=>{ e.stopPropagation(); e.preventDefault(); props.addUser({...state.newUser}); }}>
              Name: <input type="text" defaultValue="" onChange={(e)=>this.formChange(e)} name="name" /><br />
              
            </form>
            : null
          }

          <MyTable data={props.data} deleteUser={props.deleteUser} />
          
          <LatestNews />
        </div>
      </main>
    )

  }
  


}



class MyTable extends React.Component {

  render() {
    let props = this.props;

    return (

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {props.data.users && props.data.users.length ? props.data.users.map((user, i) => {
              return (
                <MyRow key={i} i={i} user={user} deleteUser={props.deleteUser} />
              )
            }) :
            <tr>
              <td colSpan={3}>No users found.</td>
            </tr>
          }
        </tbody>
      </table>
    )

  }
}


class MyRow extends React.Component {
  render() {
    let props = this.props;
    return(
      <tr>
        <td>{props.i+1}</td>
        <td>{props.user.name}</td>
        <td>
          <a href="#" onClick={(e)=>props.deleteUser(props.i)}>Delete</a>
        </td>
      </tr>
    );
  }
}