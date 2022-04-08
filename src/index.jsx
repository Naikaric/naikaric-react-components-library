import './index.scss';

import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import { Button, Field, Hlink } from './components';

const App = () => {
  const { register, formState: { errors } } = useForm({ shouldFocusError: false });

  return (
    <div className='nrcl-page'>
      <div className='nrcl-page__menu'>
          <Hlink to='#buttons'>Кнопки</Hlink>
          <Hlink to='#text-fields'>Текстовые поля</Hlink>
          <Hlink to='#links'>Ссылки</Hlink>
      </div>
      <div className='nrcl-page__content'>
        <h1>Компоненты</h1>
        <div className='nrcl-components'>
          <div id='buttons' className='nrcl-components__category'>
            <h2 className='nrcl-components__category-title'>Кнопки</h2>
            <div className='nrcl-components__category-description'>
              <h3>Описание</h3>
              <div>
                <p>Кнопки используются для инициализации какого-либо действия на сайте.</p>
              </div>
            </div>
            <div className='nrcl-components__category-description'>
              <h3>Ограничения</h3>
              <div>
                <p>Нельзя использовать кнопки в качестве навигационных элементов. Когда желаемым действием является переход пользователя на новую страницу, используйте ссылки.</p>
              </div>
            </div>
            <div className='nrcl-components__category-examples'>
              <div className='nrcl-components__element'>
                <h3>Базовая кнопка</h3>
                <div>
                  <Button>Кнопка</Button>
                </div>
              </div>
              <div className='nrcl-components__element'>
                <h3>Заблокированная кнопка</h3>
                <div>
                  <Button disabled>Кнопка</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div id='text-fields' className='nrcl-components__category'>
            <h2 className='nrcl-components__category-title'>Текстовые поля</h2>
            <div className='nrcl-components__category-description'>
              <h3>Описание</h3>
              <div>
                <p>Стандартный способ ввода любой относительно короткой информации.</p>
              </div>
            </div>
            <div className='nrcl-components__category-examples'>
              <div className='nrcl-components__element'>
                <h3>Базовое поле</h3>
                <div>
                  <Field type='text' label='Заголовок поля' placeholder='Пример текста' hookForm={{
                    register,
                    settings: {
                        name: 'field1',
                    },
                    errors,
                  }} />
                </div>
              </div>
              <div className='nrcl-components__element'>
                <h3>Засекреченное поле</h3>
                <div>
                  <Field type='password' label='Заголовок поля' placeholder='Пример текста' hookForm={{
                    register,
                    settings: {
                        name: 'field2',
                    },
                    errors,
                  }} />
                </div>
              </div>
            </div>
          </div>
          
          <div id='links' className='nrcl-components__category'>
            <h2 className='nrcl-components__category-title'>Ссылки</h2>
            <div className='nrcl-components__category-description'>
              <h3>Описание</h3>
              <div>
                <p>Ссылки используются для перехода между страницами на сайте, а также для перехода на сторонние ресурсы.</p>
              </div>
            </div>
            <div className='nrcl-components__category-examples'>
              <div className='nrcl-components__element'>
                <h3>Базовая ссылка</h3>
                <div>
                  <Hlink to={'/'}>Пример ссылки</Hlink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
