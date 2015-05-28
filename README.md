# TrailData

## Purpose

Pulls Boulder-area trail data from OuterSpatial's API and displays it on a map.

Boulder City, County, and Parks and Open Space have all published their trails data in the OpenTrails format. Code for America fellows previously partnered with Summit County, Ohio to create Trailsy, a web app for the county's trailsystems, built on data in early version of the [OpenTrails](http://www.opentraildata.org/) format.

This project is meant as a starting point to explore the integration of [CodeForBoulder/trailsy](https://github.com/CodeForBoulder/trailsy) with the updated OpenTrails format data hosted at [OuterSpatial](http://www.outerspatial.com/).

## Setup

This project depends on Node.js (for dependency management, the build step, and a dev server), which we will assume you've installed either from a binary [here](https://nodejs.org/download/) or using your favorite package manager.

After cloning this repo and moving to the directory at the command line, running `npm install` will install remaining dependencies (local to this project), after which `npm start` will launch a dev server that serves the map at `http://localhost:8080`.

## OpenTrails Data

To learn more about the data, look at the [OpenTrails spec](http://www.codeforamerica.org/specifications/trails/spec.html), [Boulder's corner](http://api.outerspatial.com/v0/applications/6?pretty=true) of the OuterSpatial API, or perhaps [OpenTrails-Mobile](https://github.com/opentraildata/OpenTrails-Mobile) (an open source mobile app) to see what OuterSpatial data they use.

## Trailsy

There is a partially working version of the original trailsy app with Boulder data at [http://54.200.154.117](http://54.200.154.117). And a working version of the original (Ohio) trailsy app at [http://www.tothetrails.com/](http://www.tothetrails.com/).
