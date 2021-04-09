import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Spinner from '../spinner';

function ContactForm() {
  const [state, handleSubmit] = useForm("xgerevqb");
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [ownSucceeded, setOwnSucceeded] = useState(false);
  
  useEffect(() => {
    if(ownSucceeded) {
      setTimeout(() => {
        setOwnSucceeded(false);
      }, 4000);
    } else if(state.succeeded && state.submitting) {
      setLoading(false);
      setOwnSucceeded(true);
    }
  })

  const ownHandleSubmit = (e) => {
    setName('');
    setNumber('');
    setLoading(true);
    handleSubmit(e);
  }

  const onChangeName = ({target}) => {
    let timerId;
    if(target.value.length <= 20) {
        setName(target.value);
        target.classList.remove('error');
        clearTimeout(timerId);
      } else {
        target.parentNode.classList.add('error');
        timerId = setTimeout(() => {
          target.parentNode.classList.remove('error');
        }, 3000);
      } 
  }

  const toggleFocusBlure = ({target, type}) => {
    if(type==='focus') {
      target.parentNode.classList.add('focus');
    } else {
      target.parentNode.classList.remove('focus');
    }
  }
  
  if(loading) {
    return  <Spinner />;
  }  
  if(ownSucceeded) {
    return (
      <span className="form_block_wrapper_successful">
        Дякуємо, очікуйте дзвінок.
      </span>
    );
  }
  
  return (
    <>
        <form onSubmit={ownHandleSubmit}>
        <label htmlFor="name" className="form_label">
            Як до вас звертатися?
        </label>
       <div className="form_field" id="name_wrapper">
        <input 
              className="form_field_area"
              type="text" 
              id="name" 
              name="name"
              spellcheck="false"
              value={name}
              onChange={onChangeName}
              onFocus={toggleFocusBlure}
              onBlur={toggleFocusBlure}
          />
       </div>
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <label htmlFor="number" className="form_label">
            Введіть номер телефону
        </label>
       <div className="form_field" id="number_wrapper">
          <input 
              className="form_field_area"
              type="text" 
              id="number" 
              name="number"
              spellcheck="false"
              value={number}
              onChange={({target})=>setNumber(target.value)}
              onFocus={toggleFocusBlure}
              onBlur={toggleFocusBlure}
          />
        </div>
        <ValidationError 
          prefix="Number" 
          field="number"
          errors={state.errors}
        />
        <button
            disabled={state.submitting}
            type="submit" 
            className="form_btn"
        >
            отримати <br/>
            консультацію
        </button>
      </form>
    </>
  );
}

export default ContactForm;