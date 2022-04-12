![GitHub last commit (branch)](https://img.shields.io/github/last-commit/Naikaric/naikaric-react-components-library/master?style=plastic) ![npm](https://img.shields.io/npm/v/naikaric-react-components-library) ![NPM](https://img.shields.io/npm/l/naikaric-react-components-library)

# [Библиотека React-компонентов](http://components.nikitachurilin.ru/)
![styled--components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

[UI-библиотека React-компонентов](http://components.nikitachurilin.ru/), созданная для личных проектов пользователя [Naikaric](https://github.com/Naikaric). Содержит в себе готовые элементы интерфейса для поддержания проектов в едином стиле.

## Установка
```sh
npm install --save naikaric-react-components-library
```

## Импортирование
```js
import { Button, Hlink } from 'naikaric-react-components-library';
```

## Использование
```js
import React from 'react';
import { Button, Hlink } from 'naikaric-react-components-library';

const Component = props => {
    return (
        <div>
            <Hlink to='/'>На главную</Hlink>
            <Button>Подтвердить</Button>
        </div>
    );
};

export default Component;
```

## Разработка
```sh
npm install
npm start
```

А для сборки итогового пакета используйте:
```sh
npm run build
```
