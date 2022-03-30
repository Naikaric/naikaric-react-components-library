import './index.scss';

import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';

import { useForm } from 'react-hook-form';

import Button from './components/ui/Button';
import Field from './components/ui/Field';

const App = () => {
  const { register, formState: { errors } } = useForm({ shouldFocusError: false });

  return (
    <div className='nrcl-page'>
      <div className='nrcl-page__menu'>
          <a href="#buttons">Кнопки</a>
          <a href="#text-fields">Текстовые поля</a>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
