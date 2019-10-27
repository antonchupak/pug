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
├── pages.js                  # list of pages (file for adding new pages)
├── webpack.config.js         # general webpack fonfig file
```

#### ？ Common questions

- ##### _How to add a new page_
  __Necessarily__
  * Add `new_page_title` in __pages.js__ located in root project folder.
  * Create folder for new page in `source/pug/pages/[new_page_title]`.
  * Create two reqiered files inside created folder `[new_page_title].pug` and `[new_page_title].js`.

  __Optional__
  * if you need, import `main.sass` file in your `[new_page_title].sass` file for including common styles (mixins, variables, etc)

- ##### _Add image from media in tag `<img>`_
  ![Example](https://i.imgur.com/oSSqC50.png)

- ##### _Add fonts to project_
  * You need to prepare font in four formats: _TTF, EOT, WOFF, WOFF2_
  * Place font files in `./source/media/fonts`
  * Connect your font with awesome mixin and pass two params: `+font('Name In Project As You Want', 'font-file-name')`
  * Done!
  
  P.S. You can find example with Roboto Reagular in `./source/styles/parts/base.sass`
