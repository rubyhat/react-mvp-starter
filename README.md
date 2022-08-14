# React MVP Starter

## About

Стартовый темплейт для React (SPA) приложения, где уже настроены базовые роуты, линтеры, структура приложения, подключены базовые библиотеки.

## Install

Stack: React(CRA) + Typescript + Zustand + Jest

- Node: v16.16.0
- Npm: v8.17.0
- Npx: v8.17.0

```sh
# Clone repo
git clone

# Install node modules
npm run install
```

## Scripts

```sh
# Start app in development
npm run start:dev

# Start app in production
npm run start:prod

# Build app in development
npm run build:dev

# Build app in production
npm run build:prod

# Fire ESLint check
npm run lint

# Fire ESLint fixes
npm run lint:fix

# Start tests check
npm run test
```

## Configs

### Настройки для IDE

Рекомендуемые плагины для Visual Studio Code:

- ESLint
- Lintel
- Prettier
- GitLens
- Reactjs code snippers | ES7 + React/Redux/React-Native snippets

```sh
.editorconfig
```

В настройках Visual Studio Code необходимо изменить настройку и задать значение `non-relative`:

```sh
TypeScript › Preferences: Import Module Specifier
Preferred path style for auto imports.
```

Это необходимо для работы абсолютных импортов, например:

```ts
// Было
import { TextBox } from "../../../components/_pages/Common/TextBox";

// Стало
import { TextBox } from "src/components/_pages/Common/TextBox";
```

Настройки для ESLint

```sh
.eslintrc.js
```

Настройки для Prettier

```sh
.prettierrc
```

Настройки для TS

```sh
.tsconfig.json
```

### Настройки .env

Используется для хранения различных ключей, токенов, ссылок под различные окружения. Локально можно запустить приложения с двумя конфигами одновременно, так как используются разные порты

Настройки .env для боевой среды

```sh
.env.production
```

Настройки .env для тестовой среды

```sh
.env.development
```

## Code Style

Для соблюдения качества и порядка в коде используется:

- ESLint - линтер
- Prettier - автокомплитор
- Husky - запрещает коммитить код с ошибками линтера
- Zustand - state-management
- Jest - unit testing

## Организация структуры папок и файлов приложения

Используется микс `"Fractal"` и `"by-features"` систем. Используются именованные экспорты и `index.tsx` для большей гибкости компонента и группировки экспортов.

```sh
.
|__ src/
    |__ assets/ # Общие стили, картинки и т.д.
    |__ components/ # Общие компоненты и компоненты по страницам, которые могут быть переиспользованы на любой странице
    |     |__ _pages/ # Компоненты для конкретных страниц
    |     |   |__ Home # Компонент и все что нужно для его работы в одном месте
    |     |   |   |_ ExampleCard
    |     |   |   |  |_ index.tsx
    |     |   |   |  |_ Card.tsx
    |     |   |   |  |_ styles.module.scss
    |     |   |   |  |_ Card.test.tsx
    |     |   |   |  |_ interfaces.tsx
    |     |   |   |_ index.tsx # Сгруппированы экспорты всех компонентов
    |     |__ Header # Компонент и все что нужно для его работы в одном месте
    |     |   |_ index.tsx
    |     |   |_ Header.tsx
    |     |   |_ styles.module.scss
    |     |   |_ Header.test.tsx
    |     |   |_ interfaces.tsx
    |     |__ Footer
    |     |   |_ index.tsx
    |     |   |_ Footer.tsx
    |     |   |_ styles.module.scss
    |     |   |_ Footer.test.tsx
    |     |   |_ interfaces.tsx
    |     |__ index.tsx # Сгруппированы экспорты всех компонентов
    |__ helpers/ # Вспомогательные функции и фичи
    |     |__ DateFormatter
    |     |  |__ index.ts
    |     |  |__ DateFormatter.ts
    |     |  |__ DateFormatter.test.ts
    |     |  |__ interfaces.ts
    |__ pages/
    |     |__ Home
    |     |  |__ index.tsx
    |     |  |__ Home.tsx
    |     |  |__ Home.test.tsx
    |     |  |__ styles.module.scss
    |     |__ Home
    |     |  |__ index.tsx
    |     |  |__ Home.tsx
    |     |  |__ Home.test.tsx
    |     |  |__ styles.module.scss
    |     |__ App.tsx
    |__ store/ # Cтейт приложения
    |__ hooks/ # Кастомные хуки
    |__ types/ # Общие типы
    |__ constants/ # Общие константы
    |__ route/ # Маршруты приложения
```
