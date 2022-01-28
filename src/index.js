import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const AutoTyper = (props) => {

  const [text, setText] = useState('');
  let interval = null;

  function typer() {
    setText((_text) => {
      if(_text.length < props.text.length) return props.text.substring(0, _text.length+1);
      else return '';
    });
  }

  useEffect(() => {
    interval = setInterval(typer, props.delay);
  }, [])

  return (
    <div className={styles.autotyper}>
      {text}
    </div>
  );
}