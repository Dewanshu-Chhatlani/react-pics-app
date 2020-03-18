// Pexel API Key: 563492ad6f917000010000017a66fa5c7ded40689b6042f1bcaba320
import React from "react";
import pexel from "../api/pexel";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async inputText => {
    const response = await pexel.get("/search", {
      params: { query: inputText }
    });
    this.setState({ images: response.data.photos });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
