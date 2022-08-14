# react-starter
###### This is a basic template for starting a react project with a custom folder structure. My api-starter project works great with this. Using node v16.14.0

### What's included?
* Just enough styles and examples to get the basic idea of how things work
* An extensible folder structure
* Some vscode settings and an extensions list
* A simple example page with a little bit of routing
* A bunch of packages that I like to use.
    * bootstrap
    * bootstrap-react
    * bootstrap-icons
    * izitoast
    * sweetalert 2
    * jquery
    * serve
    * sass

### Run
```sh
# install node_modules
npm i
# Development
npm start
# Build
npm run build
# Serve build folder
npm run prod
```



### Folder structure
#### Sass
* I organized my styles so that everything is exported from './src/scss/main.scss' and used in './src/App.jsx'
* main.scss has a section for 3rd party styles such as bootstrap or izitoast.
* I have a _common.scss file that is for global styles that go on every page.
* I have a _variables.scss file that gets imported into evey scss file so that I have access to all my variables. This allows you to change a color or font in 1 place and affect everywhere that it is used.
* I have a _styles folder and evey file in that folder can be named without the _ because eventually I can set up webpack to just ignore the files (or files within the folders) that begin with _.
* My MainLayout component takes a pageName prop. So for example, a page named "home" would become a class called "home-page". That way you can target that specific page in sass.

#### Exports
* My ./src/pages and ./src/components have index.js files that mostly just export all of the contents from one place.
* This export styles makes it easy to call components and also hide sub components that should only be used as part of a larger component.
* For example:
```js
// Everything can just be exported from ./src/components instead of tracking down each place things are stored
import { TopNav, HomeHero, CoolButton } from './components';
```

#### Layouts
* This is a way to wrap content in a custom layout.
* The most common use case would be to add a navbar and footer to every page.
* Other use cases could be for specific tracking, analytics, help/chat popups, advertisements, etc...
* My MainLayout component has a way of creating a "name-page" class so that sass can be used to give each separate page its own layout.

#### Pages
* This folder is meant to represent each individual page.
* They would most likely include a Layout (example: MainLayout) and the inner content of that page.

#### Components
* My components folder is set up so that each page can have it's own folder.
* For example, a page component ./src/pages/Home could have a folder in ./src/components/_Home where all its individual components could be organized.
