import React from "react";
import { marked, renderer } from "marked";
import Prism from "prism";

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    const renderer = new marked.Renderer();
    renderer.link = function (href, title, text) {
      return `<a target="_blank" href="${href}">${text}</a>`;
    };
    marked.setOptions({
      renderer: renderer,
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
              renderer: this.renderer,
            }),
          }}
        />
      </div>
    );
  }
}

export default Previewer;
