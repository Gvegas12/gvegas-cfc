<!-- TODO WEBPACK -->

# CLI для создания собственных компонентов

Умеет генерировать файлы любых расширений.

`npm:`
```bash
npm install --save-dev gvegas-cfc
```

`yarn:`
```bash
yarn add -D gvegas-cfc
```

<!-- ## Настройка

### 1. Файл конфигурации:

Создайте файл в корне проекта: `cfc.config.yml`

На данный момент, поддерживается конфиг файл со следующими расширениями:

- [x] js
- [ ] ts
- [x] json
- [x] yml | yaml

Внутри файла конфигурации пропишем следующие настройки:

```yml
UIComponent:
    path: "./templates/UIComponent",
    mode: "multiple"
PageComponent:
    path: "./templates/PageComponent",
    mode: "multiple"
```

Доступны следующие ключи для конфигурации:

```ts
path: string;
mode: "multiple" | "single";
``` -->

### Папка с шаблонами:

Создайте в корне проекта папку с любым удобным для вас названием.
Например, создадим родительскую папку `templates`.

В папке `templates` создадим две папки с шаблонами: `PageComponent` и `UIComponent`.

Структура директорий должна получится следующей:

```bash
<rootdir>
│
├── templates
│   ├── PageComponent
│   └── UIComponent
```

Далее заполним папки шаблонов:

```bash
<rootdir>
│
├── templates
│   │
│   ├── PageComponent
│   │   ├── UI
│   │   │   ├── Template.async.tsx
│   │   │   ├── Template.stories.tsx
│   │   │   └── Template.tsx
│   │   └── index.ts
│   │
│   └── UIComponent
│       ├── UI
│       │   ├── Template.module.scss
│       │   ├── Template.stories.tsx
│       │   ├── Template.test.tsx
│       │   └── Template.tsx
│       └── index.ts
│
```

### Скрипт для создания файлов
"create:ui": "npx gvegas-cfc create -t ./templates/UITemplate -o ./output UITest"
Скрипт принимает 3 аргумента:

- `-t | --template`. <br>
Название шаблона (Название папки шаблона, например `UIComponent`).
- `-o | --output` <br> Путь, куда должны сгенерироваться файлы.
- Название сгенерированного файла

Запускаем:

```bash
npx gvegas-cfc create -t ./templates/UITemplate -o ./output UITest
```

Но проще будет добавить `scripts` в `package.json`:

```json
{
...
    "scripts": {
        "create:ui": "npx gvegas-cfc create -t ./templates/UITemplate -o ./output"
    },
...
}
```

После этого мы можем запустить:

`npm:`
```bash
npm run create:ui UITest
```

или

`yarn:`

```bash
yarn create:ui UITest
```

Настройка `gvegas-cfc` завершена!
