# ![GROWR-logo](./assets/growr-logo.png)
## Table of Contents
1. [Project Overview](#Project-Overview)
2. [Deployement](#Deployement)
3. [MVP](#MVP)
4. [Beyond the MVP](#Beyond-the-MVP)
5. [Installation](#Installation)
6. [Usage](#Usage)
7. [Application Screenshots](#Application-Screenshots)
8. [License](#License)
9. [Credit](#Credit)
****

## Project overview
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Welcome to Growr, a plant exchange app with the focus of promoting community/local gathering and networking through the love of all things plant related.

With the dependency on mobile apps rooted deep in our behaviors, we want to revitalize what it means to be part of and have the support of a community. Growr acts as a facilitator of "good neighbor vibes" by targeting the all your activities within a set radius - we're in support of face-to-plant interactions, not emoji-to-emoji. :seedling:

Exchanges are just to get you into first gear - trade seeds for clippings, give away some free aloe pups, request some strange succulent to add to the collection - grow not just new plants but also your community and hit up the farmer's market or start a new urban/community garden with your new-to-you neighbors!

### Project Status:

MVP complete --> post MVP: *ONGOING*

#### In progress:
* messenging/inboxing function: currently hardcoded
* authentication: session/connect-mongo vs passport vs JWT
* delete/update function for trades


#### Issues to debug:
* responsive-ness
    - almost there but...
* 

### Project Members:
* Brandon Maxwell: [brandon-maxwell](https://github.com/brandon-maxwell)
* Felicia Wootton: [fdwootton](https://github.com/fdwootton)
* Matthew Goad: [matthewxgoad](https://github.com/matthewxgoad)
* Pamela Hsu: [p-hsu](https://github.com/p-hsu)
* Riheel H: [riheelh](https://github.com/riheelh)

****

## Deployment

This project is deployed through Github Pages @ [Growr](https://growr-project.herokuapp.com/)

****

## MVP

* [project wireframe](./assets/growr-wireframe.pdf)

### Project-build Aspects:

The following components are used to build the code for this project:

* FRONTEND
1. React.js
2. React-router-dom
2. Material-UI

* BACKEND
1. Express.js
2. MongoDB > Mongoose.js

* Signifcant packages
1. axios > for data requests
2. bcrypt > for password hashing
3. cors > for browser security
4. multer s3 & AWS > for image file uploads to cloud
5. dotenv > for environment variables

* Third-party API
1. [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) 

### Functionality:

The following lists all functions within this project:

* user can *see **ABOUT** page with info on app and creators*
* user can ***LOGIN or SIGNUP** for account with app*
* user can *access **PROFILE** page to see personal trades*
* user can *access **TRADES, EVENTS, and PLACES** within the set local area according to their own address*
* user can *access **PROFILE** page of other users from any card through a username link*
* user can *contact **OTHER USERS** via email for inquiries on trades*
* user can ***ADD** to trades, events, and places using a dynamic prompt page*
* user can ***LOGOUT** and be redirected back to landing page*


### Process:
#### Tasks

*All members of the project are full-stack coders and put work into both sides of developement: these generalized tasks and assignments act as a jumping block to initiate work flow and designate responsibility. See [**Project Members**](#project-members) section for reference.*

* **FRONTEND:** FW / MG
    - research on react CSS library > Material-UI
    - design UI navigational flow chart for pages/components
    - build skeleton of react-creat-app directory structure
    - design/edit/finalize style modifications for optimal UI/UX
    - implement API calls and react hookk
    - image upload and render function
    - messaging/inboxing function
    - deployement and post-deployement issues

* **BACKEND:** BM / PH / RH
    - design models for mongoose/mongoDB schema and documents
    - design API workflow
    - mock up data to seed database in developement
    - research third party API for location functionality
    - image upload and render function
    - messaging/inboxing function
    - deployement and post-deployement issues

## Beyond the MVP

* landing page search by zipcode function to render demo page
    - for non-signedup users
    - readme only with any interaction to redirect to signup page
* develope messaging/inbox function into forum based UI
* addition UI features for cards
    - favorite trades and places
    - "I'm going!" function for events
    - countdown / autodelete for events
* admin user features for basic site management
    - validate and maintain "static" PLACES ie. "Did that nursery move locations?"
    - follow up on duplicate postings or violation of terms(?)
* Guestbook feature for users
* allowing multiple image uploads for posts

****

## Installation

1. Clone this repository onto local workspace
2. Open Terminal (MacOS) or Git Bash (Windows) and change location to where you want the cloned directory
3. Type `git clone` and paste copied respository
4. Directory should include the following:
![Directory Structure:](./assets/images/dir-struc.png)

5. This application uses [**Mongoose.js**](https://mongoosejs.com/docs/) - please make sure you have the following tools installed:
    - [MongoDB](https://docs.mongodb.com/manual/)
    - [Node.js](https://nodejs.org/en/docs/)
    - [Robo 3T](https://robomongo.org/)
    - [Postman](https://www.postman.com/) (recommended)

## Usage

For local server use through CLI:
```
npm install
npm run
```
****

## License

This application is licensed under MIT, please see the corresponding file in the repo directory.

## Credit

* **Growr - Plant Exchange** original concept and code collaborators: Brandon Maxwell || Felicia Wootton || Matthew Goad || Pamela Hsi || Riheel H
* Mim Armand and Kat Poulos provided assistance and mentorship as the program instructor and teaching assistant respectivley
* Full-stack Bootcamp Program @ [Washington University, Saint Louis](https://bootcamp.tlcenter.wustl.edu/) through [© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand](https://www.trilogyed.com/)