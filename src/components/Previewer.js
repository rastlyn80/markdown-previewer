import React from "react";
import { marked, renderer } from "marked";
import Prism from "prism";

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      renderer: new marked.Renderer(),
      breaks: true,
      highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, "javascript");
      },
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
              renderer: new marked.Renderer(),
            }),
          }}
        />
      </div>
    );
  }
}

export default Previewer;
