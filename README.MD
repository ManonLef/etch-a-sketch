## **TOP Etch-a-Sketch Project**

### **Starting this project I imagine the following things to be implemented:**

- a fixed width and height square container in which a grid of square divs will rezz
- I want the squares to be automatically resized depending on the requested amount of horizontal and vertical squares.
- I will use flexbox with wrap to constrain the squares to their container.

### **Things to implement according to the assignment:**

- [x] **Create a Webpage with a 16x16 grid of square divs using JS.**
    - I first tested my css for this by actually creating the 16x16 divs (at gridsize/16 hardcoded in css for width and height) in the html file. Using wrap in a flex container, the square flex items fit nicely.
    - I then wrote a JS function to append the squares to their grid container. The css I wrote earlier applied perfectly still.
    - I used `outline` instead of `border` to not have to deal with the added pixels.

- [x] **Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.**
    - I dabbled with this a bit. I tried a hover effect for the `squares` class but that immediately cleared after the mouse hovered somewhere else. Instead of trying to make it a permanent state I decided to try it adding a style through DOM methods. `mouseenter` and `mouseover` seemed to both have the same effect and I have put it on my list to research more.

- [x] **Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad.**
    - Now for this step I had to get rid of the "hardcoded" sizing in css and I added some new variables so I could write a function to prompt the user and afterwards determine the size of the squares based on the prompt input. That worked and then it needs to made into a button prompt per the exercise. 
    - I also added functionality to limit the user input to a number between 2 and 100. I used a while loop to continue asking for input if the input was not a number or if it was not not between 2 and 100, and an option to cancel when pressing the cancel button.
    - To clear all the squares when clicking the button for a new grid size, I wrote a new function that clears all children from the grid container. 

### Highlights 

- I enjoyed this project. In the future I might get back to it and make it look nicer. For now I feel comfortable to move on since I think the hardest part was DOM manipulation. Adjusting the styling doesn't seem to add to my learning experience for now. 

### Possible features to add:

- [x] Add a slider for the grid size
- [ ] Add a colour picker
- [ ] Make a random colour version as described as optional in the TOP exercise
- [ ] Use a colour palette for aesthetics
- [x] Implement an eraser option
- [ ] Change the cursor to something fancy like a brush or a default finger
- [ ] Add option to export/save the created image
- [ ] Add option to paint upon mouseclick only to use it to create pixelart


