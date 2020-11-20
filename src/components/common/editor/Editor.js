import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange(this);
  }

  handleChange(value) {
    this.setState({ value });
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
        value={this.state.text}
        onChange={this.handleChange}
        modules={this.modules}
        formats={this.formats}
        placeholder="Vložte nadpis a text k novince. Velikost fontu se nastaví sama podle obrazovky uživatele."
      />
    );
  }
}

export default Editor;
