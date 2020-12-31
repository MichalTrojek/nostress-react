import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { FormGroup } from '../../../../common/Forms/FormStyles';
import Button from '../../../../common/Button';

import ReactQuill from 'react-quill';

import editNews from '../../../../../redux/actions/news/editNews';
import createNews from '../../../../../redux/actions/news/createNews';

import setSelectedItem from '../../../../../redux/actions/editor/setSelectedItem';

import 'react-quill/dist/quill.snow.css';

import '../styles/NewsEditor.css';

import EditorContainer from '../styles/EditorContainer';

import { v4 as uuidv4 } from 'uuid';

const modules = {
  toolbar: [['bold'], [{ color: ['black', '#f2c48c'] }]],
};

const formats = ['bold', 'color'];

const Editor = ({
  createNews,
  editNews,
  selectedItem,
  setSelectedItem,
  isEditModeOn,
}) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonPath, setButtonPath] = useState('MainMenu');
  const [websiteLink, setWebsiteLink] = useState('');

  const [websiteSelected, setWebsiteSelected] = useState(false);

  useEffect(() => {
    return () => {
      setSelectedItem(null); // turns off editing mode
    };
  }, [setSelectedItem]);

  useEffect(() => {
    if (isEditModeOn) {
      restoreInputFields();
    }

    function restoreInputFields() {
      if (selectedItem.selectedItemType === 'news') {
        const {
          heading,
          content,
          button,
          buttonPath,
          websiteLink,
        } = selectedItem;

        setWebsiteSelected(
          websiteLink.length > 0 && buttonPath.includes('website')
        );

        setWebsiteLink(websiteLink);
        setButtonPath(buttonPath);
        setHeading(heading);
        setContent(replaceWhiteWithBlackColor(content));
        setButtonText(button);
      }
    }

    function replaceWhiteWithBlackColor(text) {
      return text.replaceAll('white', 'black');
    }
  }, [selectedItem, isEditModeOn]);

  return (
    <EditorContainer>
      <h1 style={{ paddingBottom: '5rem' }}>Editor novinek</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup className="form-group">
          <input
            id="heading"
            onChange={(e) => setHeading(e.target.value)}
            value={heading}
            placeholder="Nadpis"
            type="Text"
            required
          />
          <label htmlFor="heading">Nadpis</label>
        </FormGroup>
        <FormGroup className="form-group">
          <input
            id="button"
            onChange={(e) => setButtonText(e.target.value)}
            value={buttonText}
            placeholder="Text tlačítka"
            type="Text"
            required
          />
          <label htmlFor="button">Text tlačítka</label>
        </FormGroup>

        <div className="selector">
          <label> Po stisknutí tlačítka se: </label>
          <select value={buttonPath} onChange={handleSelector}>
            <option value="MainMenu">přejde do objednávky hlavního menu</option>
            <option value="BreakfastMenu">
              přejde do objednávky snídaňového menu
            </option>
            <option value="website">přejde se na webovou stranku</option>
          </select>
        </div>

        {websiteSelected > 0 && (
          <FormGroup className="form-group">
            <input
              onClick={() => setWebsiteLink('https://')}
              id="website"
              onChange={(e) => setWebsiteLink(e.target.value)}
              value={websiteLink}
              placeholder="Webova stranka"
              type="Text"
              required
            />
            <label htmlFor="website">Webova stranka</label>
          </FormGroup>
        )}

        <ReactQuill
          modules={modules}
          formats={formats}
          value={content}
          onChange={getContent}
          placeholder="Vložte text k novince."
        />
        {renderEditButtons()}
      </form>
    </EditorContainer>
  );

  function handleSelector(e) {
    const value = e.target.value;
    setWebsiteSelected(value.includes('website'));
    if (websiteSelected) {
      setButtonPath(value);
    } else {
      setWebsiteLink('');
      setButtonPath(value);
    }
  }

  function renderEditButtons() {
    return isEditModeOn ? (
      <div>
        <Button primary>změnit</Button>
        <Button primary onClick={handleCancelEdit}>
          Zrušit editování
        </Button>
      </div>
    ) : (
      <Button primary> Vytvořit novinku</Button>
    );
  }

  function handleCancelEdit() {
    setSelectedItem(null);
    setWebsiteSelected(false);
    clearInputs();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      heading.length === 0 ||
      content.length === 0 ||
      buttonText.length === 0 ||
      (websiteSelected && websiteLink.length === 0)
    ) {
      console.log('Some fields are empty!');
      return;
    }

    const news = {
      id: uuidv4(),
      heading: heading,
      content: replaceBlackWithWhiteColor(content),
      button: buttonText,
      websiteLink: websiteSelected ? websiteLink : '',
      buttonPath: buttonPath,
      selectedItemType: 'news',
    };

    if (isEditModeOn) {
      const { id } = selectedItem;
      editNews({ ...news, id: id });
      setSelectedItem(null);
    } else {
      createNews(news);
    }
    clearInputs();
    setWebsiteSelected(false);
  }

  function replaceBlackWithWhiteColor(text) {
    return text.replaceAll('black', 'white');
  }

  function clearInputs() {
    setHeading('');
    setContent('');
    setButtonText('');
    setButtonPath('MainMenu');
    setWebsiteLink('');
  }

  function getContent(content, delta, source, editor) {
    setContent(content);
  }
};

function mapStateToProps(state, prevState) {
  return {
    selectedItem: state.editor.selectedItem,
    isEditModeOn: state.editor.isEditModeOn,
  };
}
export default connect(mapStateToProps, {
  createNews,
  editNews,
  setSelectedItem,
})(Editor);
