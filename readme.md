# Express-Cloudant

A template for [Node.js](http://nodejs.org/) projects from your friends at [Cloudant](http://cloudant.com)

## Features

* Built-in reverse proxy to your Cloudant account at [/proxy](/proxy), ending all CORS headaches.
* Custom API in `routes/api.js` using [PouchDB](http://pouchdb.com/), exposing your database in a more controlled fashion.
* Uses [Grunt](http://gruntjs.com/) to manage static assets and design documents.
* Manages design documents in the `ddocs` folder as JavaScript rather than raw JSON.

## Install

Express-Cloudant depends on Grunt.js being installed globally. To install it, run this:

    sudo npm install -g grunt-cli

Then, let's get the project and install its dependencies:

    git clone https://github.com/cloudant-labs/express-cloudant
    cd express-cloudant
    npm install

You're good to go!

## Configuration

Express-Cloudant uses a `.env` file to store credentials and the like. A sample one comes in the repo as `env.example`. Copy it and customize it by running this:

    cp env.example .env

Now edit `.env` with your Cloudant credentials. It's ignored by git, so you won't accidentally commit it.

## Running

Once you have [Heroku's toolbelt](https://toolbelt.heroku.com/) installed, do this:

    foreman run grunt && foreman start

This will...

* Concatenate and minify static assets.
* Push design docs stored in `/ddocs` to the appropriate databases.
* Start the Node.js server.

## Design Documents

Design documents live in the `/ddocs` folder in JS files named after the databases where they'll be pushed to. So, a file named `logs.js` will be pushed to a database named `logs`. To see an example design doc in the format Express-Cloudant understands, open up `/ddocs/_users.js`.

## Launch on Heroku

Heroku uses a `.env` file to store environment variables like this:

    USERNAME=derpherpburp
    PASSWORD=friendshipismaniacal

To push those variables to your Heroku instance, do `heroku config:push`. Then:

    heroku create [app]
    git push heroku master

Now your app should be live. Easy, eh?

## Get Involved!

Only together can we expand the universe of human potential! Fork the project on [GitHub](https://github.com/cloudant-labs/express-cloudant), open an issue, or submit a pull request. Everything helps :D