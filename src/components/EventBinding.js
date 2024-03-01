class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ message: "Goodbye" });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
/*
class EventBind extends Component {
  state = {
    message: 'Hello',
  };

  // No explicit binding needed
  clickHandler = () => {
    this.setState({ message: 'Goodbye' });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

*/
/*
class EventBind extends Component {
  state = {
    message: 'Hello',
  };

  clickHandler() {
    this.setState({ message: 'Goodbye' });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}


*/
/*
class EventBind extends Component {
  state = {
    message: 'Hello',
  };

  clickHandler() {
    this.setState({ message: 'Goodbye' });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    );
  }
}

*/