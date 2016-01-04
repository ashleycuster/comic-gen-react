React and Flux application that converts text to comic panels
======

## Pages
### Home page
- [ ] Title, background image, photo credit
- [ ] Text box input with submit button
- [ ] Button triggers character parse logic, routes to character selection page

### Character selection
- [ ] List of characters extracted from text
- [ ] svg image of character selection
- [ ] Button ('Finished') triggers text parse logic, routes to comic page

### Comic strip
- [ ] Displays final result: comic strip
- [ ] Option to save strip as image

## Logic
- [ ] Extract character names from user input using regular expressions
- [ ] Break up text based on maximum length and new character talking

## Sources 
The base of this React application is a modification the demo from Cory House's Pluralsight course, [Building Applications with React and Flux](https://www.pluralsight.com/courses/react-flux-building-applications). 

## Running Locally 
Clone or download this repo, run `npm install` to install node_modules dependencies, run `gulp`. 

