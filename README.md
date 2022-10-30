# Frugal - Expense Tracker

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#features-&-info">Features & Info</a>
    </li>
    <li>
      <a href="#design-decisions">Design Decisions</a>
    </li>
    <li>
      <a href="#to-do">To-do</a>
    </li>
    <li>
      <a href="#challenges">Challenges</a>
    </li>
    <li>
      <a href="#what-i-would-do-if-i-had-more-time">What I would do if I had more time</a>
    </li>
    <li>
      <a href="#bugs">Bugs</a>
    </li>
  </ol>
</details>

## Getting Started

This project was built with React, Styled Components, Firebase, and more. To see the site live, see [this link](https://frugal-expense-tracker.web.app/).

To install on your local machine, you'd need to have Node installed, and to get it to work, you'd need to have a firebase project initialised for the database and authentication.

If you already have that set up, then fork the repo and clone it to your machine, or you can clone it right from here. Then, navigate to the client folder, open a terminal, and run

```
> npm install
```

to install all the necessary dependencies. Connect your firebase configurations to firebase.js, then run

```
> npm start
```

This should start up the app on your localhost server.

## Features & Info

* Frugal allows you create, read, update and delete entries made into a ledger designed to track your spending habits.
* Your sensitive data can not be accessed by the app. It is handled directly by Firebase, so your data is in no danger of being exploited.
* There are three ways to sign in. You can make an account and log in, Sign in directly with Google, or, if you're not committed to making an account yet, you can sign-in as an already exsiting user, Ted, to see what the app looks like on the inside, as it is inaccessible without an account.

## Design Decisions

* I wanted to write faster css without the restrictions that come with using a component library, so I found Styled-Components to be a nice compromise.
* I plan to become a full-stack dev, but it's also important to focus and gain a strong deal of experience in an area to stand out, so this project was a way to do that. The frontend is custom, but the backend is handled externally by Firebase.  

## To-do

* Use charts and graphics to help the user visualise their spending habits.
* Have a running count of the total of the user's spending and income.
* Refactor.
* Include unit tests. As this is a personal project, and a small one at that, I neglected on this front.

## Challenges

* Using the Authentication services for the first time was pretty straightforward, but using Firestore for the first time tripped me up a litte because of how little control I had over handling the schema. Of course, this is a NoSQL database, so that's to be expected.

## What I would do if I had more time

* There are some firebase libraries designed to help with incorporating these services into a project. It was good to get a close look at how Firebase worked without much abstracting the way, but for the sake of speed, I'd acquaint myself with some third-party services.

## Bugs

If you discover any bug, feel free to open an issue.
