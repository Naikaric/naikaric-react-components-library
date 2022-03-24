import './index.scss';

import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';

import { useForm } from 'react-hook-form';

import Button from './components/ui/Button';
import Field from './components/ui/Field';

const App = () => {
  const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm({ shouldFocusError: false, });

  return (
    <div>
      <h1>Компоненты</h1>
      <div>
        <h2>Кнопки</h2>
        <div>
          <div>
            <Button onClick={() => alert('Ивент на кнопке работает')}>Кнопка</Button>
          </div>
          <div>Обычная кнопка</div>
        </div>
      </div>
      <div>
        <h2>Поля</h2>
        <div>
          <div>
            <Field type='text' hookForm={{
              register,
              settings: {
                  name: 'field1',
              },
              errors,
            }} />
          </div>
          <div>Обычное поле</div>
        </div>
        <div>
          <div>
            <Field type='text' label='Название поля' hookForm={{
              register,
              settings: {
                  name: 'field2',
              },
              errors,
            }} />
          </div>
          <div>Обычное поле с подписью</div>
        </div>
        <div>
          <div>
            <Field type='text' label='Название поля' required hookForm={{
              register,
              settings: {
                  name: 'field3',
              },
              errors,
            }} />
          </div>
          <div>Обязательное поле поле с подписью</div>
        </div>
        <div>
          <div>
            <Field type='password' hookForm={{
              register,
              settings: {
                  name: 'field4',
              },
              errors,
            }} />
          </div>
          <div>Поле с скрываемым вводом</div>
        </div>
        <div>
          <div>
            <Field type='text' hookForm={{
              register,
              settings: {
                  name: 'field5',
                  onChange: (e) => alert(e.currentTarget.value),
              },
              errors,
            }} />
          </div>
          <div>Поле с ивентом при изменении поля</div>
        </div>
        <div>
          <div>
            <Field type='text' hookForm={{
              register,
              settings: {
                  name: 'field6',
                  pattern: {
                      value: /\+\d+ \(\d{3}\) \d{3} \d{2}-\d{2}/,
                      template: '+7 (999) 999 99-99',
                      message: 'Номер не соответствует шаблону',
                  },
              },
              errors,
            }} />
          </div>
          <div>Поле с маской</div>
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
