# TrailData

## Purpose

Pulls Boulder-area trail data from OuterSpatial's API and displays it on a map.

Meant as a starting point to explore the integration of [CodeForBoulder/trailsy](https://github.com/CodeForBoulder/trailsy) with the updated [OpenTrails](http://www.opentraildata.org/) format data hosted at [OuterSpatial](http://www.outerspatial.com/).

## Setup

This project depends on Node.js (for dependency management, the build step, and a dev server), which we will assume you've installed either from a binary [here](https://nodejs.org/download/) or using your favorite package manager.

Then, running `npm install` at the command line will install remaining dependencies (local to this project), after which `npm start` will launch a dev server that serves the map at `http://localhost:8080`.
