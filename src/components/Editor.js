import React from "react";

class Editor extends React.Component {
  processChange = (event) => {
    this.props.processChange(event);
  };

  render() {
    return (
      <div className="section">
        <div className="header">
          <div className="caption">Editor</div>
        </div>
        <textarea
          onChange={this.processChange}
          value={this.props.textContent}
          name="editor"
          id="editor"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    );
  }
}

export default Editor;
