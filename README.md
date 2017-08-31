<!-- This needs an hour and a half or more.  Hour is not enough -->

>**Note:** This will be a pair programming activity.  Please select one developer's machine to work on, but make sure you share your code with your partner before leaving class.

# Angular 2 Refactoring Lab

## Set Up

First, fork and clone this repo.  

In the `starter-code` folder, you will need to run `bower install` to install your dependencies.  

Then, start your `simpleHTTPServer` with `python` to see a fully functioning Angular app.  Cool, right?  But not very modern.

Throughout this lab, we will slowly turn our Angular 1 app into an Angular 2 app, using our good friend, **refactoring**.

If you get stuck, you should use [this guide](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html) on the Angular 1 and Angular 2 code differences, as well as a healthy amount of Google, and a little bit of help from your neighbors.

Before you move on to the next step, take a quick look at the `starter-code` folder, and observe the differences between files and folder structure vs Angular 2+.

## Set Up Round Two

Use `ng new` to set up a local Angular 2+ app called `updatedproject`.  The app folder you create with this command should be at the same level as `starter-code`.  

## Getting Started

The amount of files in this project is a little daunting, but you only need to worry about a few files.  Start small, and gradually add in new features from `starter-code` into `updatedproject`.

- First, you should probably create an HTML template that is referenced by Url rather than written as a string.  Create a new `templates` folder and put it inside `app`.  Then, create an HTML file inside this folder.  How would you replace the hardcoded template with this file? (Hint: It's basically the same as for `ngRoute` in Angular.)
- Now, the fun part.  Slowly add the pieces of your Angular 1 app from `starter-code/index.html` to `updatedproject/src/app/templates/cartoon.html` and from `starter-code/client.js` to `updatedproject/src/app/app.component.ts`.  You can find the code you'll need in [this guide](https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html).
- In addition to `app.component.ts` and `cartoon.html`, you may also need to change `app.module.ts` as you go through this refactoring.
- Once you have all the HTML in `cartoon.html`, use the new Angular 2 `styleUrls` method to include `cartoonStyle.css`.
- Finally, see if you can get `MyFactory` injected into your component.  Note that there are a lot of ways to do this, and it is quite tricky.  Hint: `export`ing and `import`ing a class is a good place to start.

## Deliverable

When you are finished, you should be able to look at your Angular 2 and Angular 1 apps side-by-side and see no major differences.
