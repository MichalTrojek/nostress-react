import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  modules = {
    toolbar: [
      [{ header: [1, false] }],
      ['bold'],
      [{ color: ['#ffffff', '#f2c48c'] }],
    ],
  };

  formats = ['header', 'bold', 'color'];

  render() {
    return (
      <ReactQuill
        theme="snow"
        value={this.props.value}
        onChange={this.props.onChange}
        modules={this.modules}
        formats={this.formats}
        placeholder="Vložte nadpis a text k novince. Velikost fontu se nastaví sama podle obrazovky uživatele."
      />
    );
  }
}

export default Editor;
