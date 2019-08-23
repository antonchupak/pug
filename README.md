## Multipage Pug Boilerplate | Webpack + Pug + SASS + ES6 🚀

![Demo](https://i.imgur.com/lPnWaYg.jpg)

#### 📚 General information
This project was born when one developer time to time needed to create simple sites. And usually it must be a multi-page site. Use this boilerplate and don't think about configuration all of these tools together:

* [Babel](https://babeljs.io/) 📝
* [Pug](https://pugjs.org) 🐶
* [SASS](https://sass-lang.com/) 🎨
* [Webpack](https://webpack.js.org/) 📦


__Usage:__
For start clone this repository and install dependencies with command `yarn`.

__Commands:__
```yarn start``` - for start development.

```yarn build``` - for generate HTML/CSS.

```yarn serv``` - run [node-static](https://github.com/cloudhead/node-static) for __build__ folder

__Aliases:__
  * media: `source/media`
  * styles: `source/styles`

__Production folder structure:__
All files related to _scripts / images / styles_ will have hash-name to avoid caching on the server. Only _fonts_ don't have it.

```bash
.pug
├── build                     # build folder
│   ├── images                # images
│   ├── js                    # script files
|   ├── styles                # styles
|   └── index.html            # html files placed in root build folder
```

#### 🔎 Structure

```bash
.pug
├── build                     # public folder for host on server
├── source                    # sources (pages, styles, js)
│   │── media                 # all static files (images, fonts, music, videos, files for localization)
│   │   ├── fonts
│   |   └── images
│   └── pug                   # general folder
│       ├── pages             # separate folder for each page
│       └── styles            # common styles related to all pages (theme, mixins, variables, etc)
├── .babelrc.json             # babel config
├── .eslintrc.json            # ESLint config
├── .postcss.config.js        # POSTCSS config
├── webpack.config.js         # general webpack fonfig file
```

#### ？ Common questions

- ##### _How to add a new page_
  It's very simple!
    * Create folder for a new page in `source/pug/pages/[new_page_title]`. In this folder.
    * Create two files inside this folder `[new_page_title].pug` and `[new_page_title].js`.
    * Add `new_page_title` in __pages.js__ located in root project folder.
    * if you need, import `main.sass` file in your `[new_page_title].sass` file for including common styles (mixins, variables, etc)

- ##### _Add image from media in tag `<img>`_
  ![Example](https://i.imgur.com/oSSqC50.png)

#### TODO
  * configure `DEV` mode