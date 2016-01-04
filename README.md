React and Flux application that converts text to comic panels
======

## About
ComicGen is a React application using Flux architecture that converts user-supplied text into a comic strip. It finds the names of the people in the conversation and will have the user select svg images to pair with each person or 'character'. The application will break the conversation into segments and these segments will fill speech bubbles above the appropriate character images in a series of comic panels. 

In a second iteration, I'd like to give users more character image and panel background options. I'd also like to allow users to have more control over how the text is divided into panels and allow the placement of panels where characters have a variety of expressions to convey mood and timing. 

App inspired by many nonsense conversations on Google Hangouts. 

## Tasks
### Home page
- [x] Title, background image, photo credit
- [x] Text box input with submit button
- [x] Button triggers character parse logic, routes to character selection page

### Character selection page
- [ ] List of characters extracted from text
- [ ] Choice of character shape
- [ ] Button ('Finished') triggers text parse logic, routes to comic page

### Comic strip page
- [ ] Displays final result: comic strip
- [ ] Option to save strip as image

### Logic
- [x] Extract character names from user input using regular expressions
- [ ] Save map of character name with character svg
- [ ] Break up text based on maximum length and new character talking

### Other Tasks
- [ ] Add testing with karma
- [ ] Fonts and styling
- [ ] Deploy site with gh-pages

## Sources 
The base of this React application is a modification the demo from Cory House's Pluralsight course, [Building Applications with React and Flux](https://www.pluralsight.com/courses/react-flux-building-applications). 

## Running Locally 
Clone or download this repo, run `npm install` to install node_modules dependencies, run `gulp`. 

