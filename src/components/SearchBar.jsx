import React from "react";

class SearchBar extends React.Component {
  state = { inputText: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputText);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.inputText}
              onChange={event =>
                this.setState({ inputText: event.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
