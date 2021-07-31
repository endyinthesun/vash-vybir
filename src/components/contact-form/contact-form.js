import React, { useState, useEffect } from 'react';
import {IMaskInput as Input} from 'react-imask';
import ChoiceService from '../../services/choice-service';

import Spinner from '../spinner';

function ContactForm() {
  const choServ = new ChoiceService();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let timerId;
    if(succeeded && !loading) {
      timerId = setTimeout(() => {
          setSucceeded(false);
      }, 3000);
    }
    if(error && !loading) {
      timerId = setTimeout(() => {
        setError('');
    }, 3000);
    }
    return () => clearTimeout(timerId)
  });

  const ownHandleSubmit = (e) => {
    const validNumber = /\([0-9]{3}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}/;

    if(name && validNumber.test(number)) {
      setLoading(true);
      const formData = {
        'name': name,
        'number': ` +38${number.match(/\d/g).join('')}`
      };
      choServ.postForm('https://app.form2chat.io/f/7456d335', formData)
      .then((res) => {
        if(res.status === 200) {
          setSucceeded(true);
          setError('');

          setName('');
          setNumber('');
        } else {
          setSucceeded(false);
          setError('server');
        }
      })
      .catch(() => {
        setSucceeded(false);
        setError('network');
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      e.target.classList.add('error');
      let timerId = setTimeout(() => {
        e.target.classList.remove('error');
        clearTimeout(timerId);
      }, 3000);
    }
    e.preventDefault();
  }

  const onChangeName = ({target}) => {
    let timerId;
    if(target.value.length <= 20) {
        setName(target.value);
        target.parentNode.classList.remove('error');
        clearTimeout(timerId);
      } else {
        target.parentNode.classList.add('error');
        timerId = setTimeout(() => {
          target.parentNode.classList.remove('error');
        }, 3000);
      }
  }

  const onChangeNumber = ({target}) => {
    setNumber(target.value);
  }

  const createMessage = (type, clazz) => {
    let contain = '';
    switch(type) {
      case 'succeeded':
        contain = 'Дякуємо, очікуйте дзвінок.';
        break;
      case 'errorServer':
        contain = 'Вибачте за незручності, проблеми на стороні сервера.';
        break;
      case 'errorNetwork':
        contain = 'Проблеми зі з\'єднанням в мережі. ';
        break;

      default:
        contain = 'Непередбачувана помилка.'
    };
    clazz = 'form_block_wrapper_' + clazz;
    return (
      <span className={clazz}>
        {contain}
      </span>
    );
  }

  if(loading) {
    return  <Spinner />;
  }
  if(succeeded) {
    return createMessage('succeeded', 'successful');
  }

  if(error === 'server') {
    return createMessage('errorServer', 'error');
  }
  if(error === 'network') {
    return createMessage('errorNetwork', 'error');
  }

  return (
    <>
      <form onSubmit={ownHandleSubmit}>
        <div className="fields">
          <div className='form_group'>
            <label htmlFor="name" className="form_label">
                Як до вас звертатися?
            </label>
            <div className="form_field" id="name_wrapper">
              <input
                    placeholder={'Ім\'я та прізвище'}
                    type="text"
                    id="name"
                    name="name"
                    spellCheck="false"
                    value={name}
                    onChange={onChangeName}
                />
            </div>
          </div>
          <div className="form_group">
            <label htmlFor="number" className="form_label">
                Введіть номер телефону
            </label>
            <div className="form_field" id="number_wrapper">
              <span className="prefix">+38</span>
              <Input
                  placeholder='(XXX)-XXX-XX-XX'
                  mask='(000)-`000-`00-`00'
                  radix="."
                  type="tel"
                  inputMode='tel'
                  id="number"
                  name="number"
                  spellCheck="false"
                  value={number}
                  onChange={onChangeNumber}
              />
            </div>
          </div>
        </div>

        <button
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
