import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';

// This would probably be a props in actual app.
const configurationObject = {
  glossary: {
    title: 'example glossary',
    GlossDiv: {
      title: 'S',
      GlossList: {
        GlossEntry: {
          ID: 'SGML',
          SortAs: 'SGML',
          GlossTerm: 'Standard Generalized Markup Language',
          Acronym: 'SGML',
          Abbrev: 'ISO 8879:1986',
          GlossDef: {
            para: 'A meta-markup language, used to create markup languages such as DocBook.',
            GlossSeeAlso: ['GML', 'XML']
          },
          GlossSee: 'markup'
        }
      }
    }
  }
};

// Could add buttons to submit changes to database.
// Editor supports custom keybindings and mappings, functions and more... also possible to configure YAML support
// More info: https://github.com/securingsincity/react-ace#readme
const Editor = () => {
  const [editorValue, setEditorValue] = useState(JSON.stringify(configurationObject, undefined, 2));
  return (
    <div>
      <AceEditor
        width="100%"
        height="825px"
        className="w-full"
        mode="json"
        theme="textmate"
        defaultValue={JSON.stringify(configurationObject, undefined, 2)}
        name="configuration-object-editor"
        fontSize={16}
        showPrintMargin={true}
        onChange={value => setEditorValue(value)}
        showGutter={true}
        highlightActiveLine={true}
        value={editorValue}
        setOptions={{
          tabSize: 2
        }}
      />
    </div>
  );
};

export default Editor;
