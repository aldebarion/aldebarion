# Aldebarion

Aldebarion is the front-end framework built for the future.

![Smark desk](examples/assets/table.png)

This framework helps you to:

* design interfaces for futuristic smart screens, touch tables and HUDs.
* implement user interfaces for long life application and productivity based on maximum ergonomy and timeless design
* increase efficiency with adaptive interfaces based on human experience

> This project is still in development so do not hesitate to involve yourself.

## Getting started

This project is more about guidelines than real implementation. Even so, A first sass/css implementation is available.
 It includes basic widgets, animations, layout and default theme.

```bash
npm install aldebarion --save
```

>  More implementations with reactjs will come.

## Guidelines

You must follow aldebarion guidelines in order to get a continuity in user experience.

### Multiplatform

* ensure responsiveness compatible with all platforms including computers, smartphone, tablets, large screens and HUDs.
* use a minimal set of contrasted colors to manage even the most lightning environments

### Ergonomy

* accompany the look of the user: display everything with transition
* do not use no frills except to catch the user attention
* use geometrical shapes
* integrate several levels of reading

### Adaptation to user

* make interface adaptable/adaptive to user

## Documentation

### Semantic language

Since this project is a sass implementation, you interact with it through a combination of class names
and attributes. The wording of this implementation is inspired by [Semantic-ui](https://semantic-ui.com/).
It is based on natural language and very simple to use.

However, this project is specialized on animations so
you need to use complex html components. In order to help you understanding what you can change and what you cannot,
the framework uses non-natural language for internal components you should not modify.

*Example:*
```html
<button class="ad button"> <!-- you may add classes here to change the default behavior -->
  <span class="ad buttonLabel"> <!-- you should not change this class, the only
                                  thing you can do is to remove it if you don't want it -->
    simple button
  </span>
</button>
```

> Notice that **all** components managed by **Albebarion** must have the class **ad**.

### Responsiveness

A first level of responsiveness is implemented.

*Example:*
```html
<html>
  <!-- head code -->
  <body class="ad body">
    <div class="ad screen <platform>">
      <div class="ad workspace">
        <!-- your code -->
      </div>
    </div>
  </body>
  <!-- js code -->
</html>
```

* screen: the display place. Available platforms are only `computer` for now.
* workspace: the interaction place (sometimes you may interact on a smaller zone than the full screen especially on very large screens).

> However if your application manages several screens, add several screens div and override the positioning.

### Widgets

A lot of widgets are already designed using the guidelines. The only tricky thing is to correctly build
them in html because several of them have complicated html code (because of animation).

* [guidelines](doc/guidelines.md)
* [platforms](doc/platforms/platforms.md)
* [themes & colors](doc/themes.md)



## Links

* [icons](http://themify.me/themify-icons)
* [js animations](https://greensock.com/docs/TweenLite)
