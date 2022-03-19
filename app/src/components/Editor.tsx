import React, { useCallback } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

interface Props {
  displayName: string;
  language: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
const Editor = ({ value, displayName, language, onChange }: Props) => {
  const handleChange = useCallback(
    (editor, data, value) => {
      onChange(value);
    },
    [onChange]
  );
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      ></ControlledEditor>
    </div>
  );
};

export default Editor;
