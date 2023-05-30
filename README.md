<!-- TODO WEBPACK -->

# CLI для создания собственных компонентов

CLI умеет создать файлы любвых расширений с множеством удобных опций.

```bash
npm install --save-dev gvegas-cfc
```

## Режимы

Поддерживает два режима:

**`single`** - для создания единичных файлов

**`multiple`** - для создания вложенных файлов (поддерживаются вложенные папки)

## Настройка

### 1. Файл конфигурации:

Создайте файт в корне проекта: `cfc.config.yml`

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

На данный момент, доступны следующие ключи для конфигурации:

```ts
interface IConfig {
  path: string;
  mode: "multiple" | "single";
}
```

### 2. Папка с шаблонами:

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

### 3. Скрипт для создания файлов

Команда `gvegas-cfc` принимает 3 аргумента:

1. Название шаблона (Название мы задавали в конгурационном файле)
2. Путь, куда должны сгенерироваться файлы
3. Название сгенерированного файла

Мы можем запустить:

```bash
npx gvegas-cfc PageComponent ./src/pages MainPage
```

Но проще будет добавить `scripts` в `package.json`:

```json
{
...
    "scripts": {
        "create:page": "gvegas-cfc PageComponent ./src/pages/",
        "create:ui": "gvegas-cfc UIComponent ./src/shared/UI/"
    },
...
}
```

После этого мы можем запустить:

```bash
npm run create:page MainPage
```

или

```bash
npm run create:ui UI
```

Настройка `gvegas-cfc` завершена!
