import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import Credits from "./Credits";
import { defaultText } from "./content/defaultText";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentMarkdown: defaultText };
  }
  processChange = (event) => {
    this.setState({ currentMarkdown: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <Editor
          textContent={this.state.currentMarkdown}
          processChange={this.processChange}
        />
        <Previewer previewContent={this.state.currentMarkdown} />
        <Credits />
      </div>
    );
  }
}

export default App;
