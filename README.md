<p align="center">
  <img src="artwork/marquee-promo-tile.png" alt="Context Menu Example">
</p>

Snippets is a Chrome extension which pulls in JavaScript code snippets from any GitHub repository (including GitHub Enterprise), allowing them to be executed via the context menu or omnibox.

## Context Menu
The context menu provides easy access and discovery of snippets by right clicking anywhere in the page. Clicking on a snippet will execute it in the current tab.

<p align="center">
  <img src="docs/context-menu.gif" alt="Context Menu Example">
</p>

## Omnibox
The omnibox allows you to fuzzy search all available snippets.

To activate the Snippets omnibox, focus on the address bar and type '`s`' then `tab` or `space`. Once activated you can begin to fuzzy search.

> :bulb: You can use `⌘+l` to jump straight to the address bar.

<p align="center">
  <img src="docs/omnibox.gif" alt="Context Menu Example">
</p>

## Recommended snippets

https://github.com/bgrins/devtools-snippets/tree/master/snippets

## FAQ

### What are snippets?
Snippets are small JS scripts which can be executed within the context of any webpage. A Snippet could do just about anything you can think of, for example it could [pretty print the search query](https://github.com/bgrins/devtools-snippets/tree/3bc7d150e1d0bd7ff27be4df15e949bee94456ff/snippets/querystringvalues) or maybe autofill a large form.

### Why not use the [snippets built-in to Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/snippets)?
DevTools doesn't provide a way to easily share snippets with your team or the open source community.

DevTools requires you to author and maintain snippets in a custom editor (albeit, quite a good editor).

## License

MIT
