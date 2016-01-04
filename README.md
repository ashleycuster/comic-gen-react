React and Flux application that converts text to comic panels
======

## Pages
### Home page
- [x] Title, background image, photo credit
- [x] Text box input with submit button
- [x] Button triggers character parse logic, routes to character selection page

### Character selection
- [ ] List of characters extracted from text
- [ ] Choice of character shape
- [ ] Button ('Finished') triggers text parse logic, routes to comic page

### Comic strip
- [ ] Displays final result: comic strip
- [ ] Option to save strip as image

## Logic
- [x] Extract character names from user input using regular expressions
- [ ] Save map of character name with character svg
- [ ] Break up text based on maximum length and new character talking

## Other Tasks
- [ ] Add testing with karma
- [ ] Fonts and styling
- [ ] Deploy site with gh-pages

## Sources 
The base of this React application is a modification the demo from Cory House's Pluralsight course, [Building Applications with React and Flux](https://www.pluralsight.com/courses/react-flux-building-applications). 

## Running Locally 
Clone or download this repo, run `npm install` to install node_modules dependencies, run `gulp`. 

