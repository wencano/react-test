

class Clicker extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({counter: this.state.counter+1});
  }


  render() {
    return (
      <div>
        Clicked {this.state.counter} times &nbsp;&nbsp;
        <input type="button" onClick={this.handleClick} value="Click" />
      </div>
    );
  }


  // React Component Cycle
  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(props) {

  }

  componentWillUpdate() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

}