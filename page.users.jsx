
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
            <form style={{marginBottom: 30}}>
              Name: <input type="text" defaultValue="" onChange={(e)=>this.formChange(e)} name="name" /><br />
              <input type="button" className='btn btn-secondary' onClick={e=>{ props.addUser({...state.newUser}); return false; }} value="Save" />
            </form>
            : null
          }

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
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{user.name}</td>
                    </tr>
                  )
                }) :
                <tr>
                  <td colSpan={2}>No users found.</td>
                </tr>
              }
            </tbody>
          </table>

        </div>
      </main>
    )

  }
  


}