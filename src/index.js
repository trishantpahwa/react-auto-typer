import { useEffect, useState, useRef } from 'react'

export const AutoTyper = (props) => {

  const [text, setText] = useState('');
  const intervalRef = useRef(null);
  const completedRef = useRef(false);

  function typer() {
    setText((prev) => {
      let next;
      if (prev.length < (props.text || '').length) {
        next = (props.text || '').substring(0, prev.length + 1);
      } else {
        // reached full text
        if (props.repeat && !props.onlyOnce) {
          next = '';
        } else {
          next = prev; // keep full text
        }
      }

      // handle completion side-effects once
      if (next.length === (props.text || '').length && !completedRef.current) {
        if (props.onlyOnce) {
          completedRef.current = true;
          if (typeof props.onComplete === 'function') props.onComplete();
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        } else if (!props.repeat) {
          // not repeating: stop the interval and keep text
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }

      return next;
    });
  }

  useEffect(() => {
    // reset when key props change
    setText('');
    completedRef.current = false;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(typer, props.delay || 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // re-create interval when these props change
  }, [props.delay, props.text, props.repeat, props.onlyOnce, props.onComplete])

  return (
    <div>
      <p className={props.styleClass}>
        {text}
      </p>
    </div>
  );
}