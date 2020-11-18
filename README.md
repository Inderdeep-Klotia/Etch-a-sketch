
Etch A Sketch Project:
------------------------------------------------------------

[How the Game Works:]
------------------------------------------------------------



[Key Lessons:]
------------------------------------------------------------

<h3>Adding a border influences the amount of space the element takes up.</h3>
When creating my 16 x 16 grid, I realized that adding a border to the element adds pixels on top of the element itself. It does not reduce the element size and then add the border. Thus, when creating space for the elements (grid border), I need to calculate the amount of space the borders will take.

<h3>Don't utilize inline-block to create the grids</h3>
I have an undifentifiable error on different browsers when utilizing inline-block, namely firefox. The elements are not displaying as the same on firefox as they are on safari and google chrome. Utilize a different method to create the board.

<h3>Display Grid [CSS GRID] Works much Better</h3>
CSS Grid along with fractional units create a much more concise grid. The fractional unit will never go over 100% of the viewport. Thus, soliving a lot of the issues I was experiencing with inline-block (since it does go over 100% of the viewport).

The element automatically adjusts itself to ensure that it fits on the space provided by the container. Whereas with inline-block the element does not dynamically adjust itself. Rather, it looks to either overflow or jump to another line.

<h3>Create a CSS variable to dynamically change it with JS with ease</h3>
Creating a CSS variable will allow you to dyanmically change it with JS in a function with ease. Look through code for implementation reminder.