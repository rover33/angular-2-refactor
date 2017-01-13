# Angular 2 Refactoring Lab

## Set Up

First, fork and clone this repo.  

In the `starter-code` folder, you will need to install your bower dependencies.  

Then, start your `simpleHTTPServer` with `python` to see a fully functioning Angular app.  Cool, right?  But not very modern.

Throughout this lab, we will slowly turn our Angular 1 app into an Angular 2 app, using our good friend, **refactoring**.

If you get stuck, you should use [this guide](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html) on the Angular 1 and Angular 2 code differences, as well as a healthy amount of Google, and a little bit of help from your neighbors.

## Set Up Round Two

Follow [this guide](https://angular.io/docs/ts/latest/guide/setup.html) to set up a local Angular 2 hello world.  The `quickstart` folder you create for this app should be at the same level as `starter-code`.  

Before you move on to the next step, take a quick look at the `package.json` inside `quickstart`.  Look at all those `@angular`s.  Those will come into play very soon.  

Also, look at the TypeScript files mentioned in the tutorial and look at `index.html`.  

Change the `name` field in `app.component.ts`, and see it update.  Notice how you don't even have to refresh the page.  Cool, right?

## Getting Started

The amount of files in this project is a little daunting, but you only need to worry about a few files.  Start small, and gradually add in new features from `starter-code` into `quickstart`.

- First, you should probably create an HTML template that is referenced by Url rather than written as a string.  Create a new `templates` folder and put it inside `app`.  Then, create an HTML file inside this folder.  How would you replace the hardcoded template with this file? (Hint: It's basically the same as for `ngRoute` in Angular.)
- Now, the fun part.  Slowly add the pieces of your Angular 1 app from `starter-code/index.html` to `quickstart/app/templates/cartoon.html` and from `starter-code/client.js` to `quickstart/app/app.component.ts`.  You can find the code you'll need in [this guide](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html).
- In addition to `app.component.ts` and `cartoon.html`, you may also need to change `app.module.ts` as you go through this refactoring.
- Once you have all the HTML in `cartoon.html`, use the new Angular 2 `styleUrls` method to include `cartoonStyle.css`.
- Finally, see if you can get `MyFactory` injected into your component.  Note that there are a lot of ways to do this, and it is quite tricky.  Hint: `export`ing and `import`ing a class is a good place to start.

## Deliverable

When you are finished, you should be able to look at your Angular 2 and Angular 1 apps side-by-side and see no major differences.  Feel free to rename your `quickstart` folder to something more useful like `angular-2` or `angular-cartoon`.
