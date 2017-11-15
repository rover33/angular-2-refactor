<!-- This needs an hour and a half or more.  Hour is not enough -->

<!--WDI4 9:31 starting intro, 9:41 turning over to devs -->

>**Note:** This will be a pair programming activity.  Please select one developer's machine to work on, but make sure you share your code with your partner before leaving class.

# Angular 2 Refactoring Lab

## Set Up

First, fork and clone this repo.  

First, install bower with `npm install -g bower`.

In the `starter-code` folder, you will need to run `bower install` to install your dependencies.  

Then, start your `SimpleHTTPServer` with `python` to see a fully functioning Angular app.  Cool, right?  But not very modern.

Throughout this lab, we will slowly turn our Angular 1 app into an Angular 2+ app, using our good friend, **refactoring**.

If you get stuck, you should use [this guide](https://angular.io/guide/ajs-quick-reference) on the Angular 1 and Angular 2+ code differences, as well as a healthy amount of Google, and a little bit of help from your neighbors.

Before you move on to the next step, take a quick look at the `starter-code` folder, and observe the differences between files and folder structure vs Angular 2+.

## Set Up Round Two

Use `ng new` to set up a local Angular 2+ app called `updated-project`.  The app folder you create with this command should be at the same level as `starter-code`. Start up this new app. We've got a lot of work to do.... 

## Getting Started

The amount of files in this project is a little daunting, but you only need to worry about a few files.  Start small, and gradually add in new features from `starter-code` into `updated-project`.

- Now, the fun part.  Slowly add the pieces of your Angular 1 app from `starter-code/index.html` to `updated-project/src/app/app.component.html` and from `starter-code/client.js` to `updated-project/src/app/app.component.ts`.  You will need to change the code slightly for most of these ports.  You can find the code you'll need to do this in [this guide](https://angular.io/guide/ajs-quick-reference).
>**Hint:** You will definitely want your Developer Tools console open to help you target which things to change.
- In addition to `app.component.ts` and `app.component.html`, you may also need to change `app.module.ts` as you go through this refactoring to include other helpful library/ies.
- Once you have all the HTML in `app.component.html`, move the code from `cartoonStyle.css` into the stylesheet of your App Component.
- Finally, see if you can get `MyFactory` injected into your component as a service.

## Deliverable

When you are finished, you should be able to look at your Angular 2+ and Angular 1 apps side-by-side and see no major differences.

<!--WDI4 devs done at 10:50-->
