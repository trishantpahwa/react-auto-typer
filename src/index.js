import React, { useEffect, useState } from 'react'

export const AutoTyper = (props) => {

  const [text, setText] = useState('');

  function typer() {
    setText((_text) => {
      if (_text.length < props.text.length) return props.text.substring(0, _text.length + 1);
      else return '';
    });
  }

  useEffect(() => {
    setInterval(typer, props.delay);
  }, [])

  return (
    <div>
      <p className={props.styleClass}>
        {text}
      </p>
    </div>
  );
}