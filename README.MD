## **TOP Etch-a-Sketch Project**

### **Starting this project I imagine the following things to be implemented:**

- a fixed width and height square container in which a grid of square divs will rezz
- I want the squares to be automatically resized depending on the requested amount of horizontal and vertical squares.
- I will use flexbox with wrap to constrain the squares to their container.

### **Things to implement according to the assignment:**

[X] Create a Webpage with a 16x16 grid of square divs using JS.
- I first tested my css for this by actually creating the 16x16 divs (at gridsize/16 hardcoded in css for width and height) in the html file. Using wrap in a flex container, the square flex items fit nicely.
- I then wrote a JS function to append the squares to their grid container. The css I wrote earlier applied perfectly still.
- I used `outline` instead of `border` to not have to deal with the added pixels.

[X] Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
- I dabbled with this a bit. I tried a hover effect for the `squares` class but that immediately cleared after the mouse hovered somewhere else. Instead of trying to make it a permanent state I decided to try it adding a style through DOM methods. `mouseenter` and `mouseover` seemed to both have the same effect and I have put it on my list to research more.

[ ] Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 
- Now for this step I had to get rid of the "hardcoded" bits in css and I added some new variables so I could write a function to determine the size of the squares based on the prompt input. That worked and then it needs to made into a button prompt per the exercise. 



