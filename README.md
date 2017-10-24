
#  Stan Portal

## Table of Contents
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Running the Project](#running-the-project)
1. [Testing](#testing)
1. [Notes](#notes)

## Requirements
* node `^5.0.0`
* npm `^3.0.0`

## Installation

```bash
$ git clone git@github.com:justmx/stan_project.git
$ cd stan_project
$ npm install
```

## Running the Project

```bash
$ npm start
```

## Testing

```bash
$ npm test
```

## Notes

1. The basic structure of the application is built on top of React, Redux and thunk. The whole app is built using a fractal structure which means each route has its own components and containers under its own folder. With fractal structure routes can be bundled into 'chunks' using webpack if needed. Route reducer can be lazy loaded into store when needed. However, it is not the case for this small project.
2. Testing should be fully covered and css style should be more details if there is more time.
3. To stimulate network fetch failure there is a random boolen to decide if data fetching success or not. Please refresh the movie/series pages to see different results.
