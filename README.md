# PODCAST

A web application for listening podcasts with ability to continue listen later, which **doesn't require registration**, using React and [Listennotes API](https://www.listennotes.com/ru/api/)


## Features
There are some features of the app.

##### Discover
  - Explore the best podcasts
  - Matching a color card for each podcast cover for a more harmonious look

##### Podcast Overview
  - The information details of podcast, such as publisher, description, official website, etc.
  - List of all episodes with main information ordered by date (recent first) with pagination
  - Play the episode

##### Audio player
  - Main tools (play, pause, volume setting, slider moving)
  - Saving the position of the slider to continue listening after closing the site

##### Searching
  - Search podcasts by terms from title or description
  - Autocomplete after entering letters

##### My podcasts
  - Subscribe podcasts you like and have access to list of subscriptions anytime you want
  - List is sorted by listening date (recent first)
 

##### History
  - Saving all played episodes
  - Continue listening episode from where you stop
 

##### Genres
  - List of all genres
  - Seeing podcasts of each genre by clicking on genre list item

## Running the project
The React app requires a Django server for processing images - to get dominant (average) color of podcast cover. 
1. Clone server [repository](https://github.com/Kandros9/podcast-server-akvelon-education) and folow the instructions

2. Install requirements:  `yarn install`
2. Start the React app: `yarn start`

## Techologies
 - React
 - Typescript
 - React Router
 - Redux
 - Redux-persist
 - Sass
