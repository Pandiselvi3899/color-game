import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends React.Component {
  state = {
    color: "Purple"
  };
  onChangeHandler = e => {
    this.setState({
      color: e.target.value
    });
  };
  render() {
    const styleObj = {
      background: this.state.color
    };
    return (
      <div style={styleObj} className="container">
        <div className="ui card">
          <div className="content">
            <div className="header">Color: {this.state.color}</div>
            <div className="ui search">
              <input
                className="prompt"
                onChange={this.onChangeHandler}
                value={this.state.color}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
