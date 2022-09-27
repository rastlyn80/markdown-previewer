import React from "react";
import { marked } from "marked";

class Previewer extends React.Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      breaks: true,
    });
  }

  render() {
    return (
      <div className="section">
        <div className="header">
          <div className="caption">Preview</div>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked.parse(this.props.previewContent, {
              renderer: this.renderer,
            }),
          }}
        />
      </div>
    );
  }
}

export default Previewer;
