/**
 * Author: Inderdeep Klotia
 * 
 * 
 * 
 * Current Version: V: 3.0 
 * 
 * 
 * V 2.0: Key Edits
 *  -   Created seperate functions for clearing the board & adding hover functionality.
 *  -   Created base functionality for changing grid colors based on user request (works with button)
 * 
 * 
 * V 1.0: Key Edits
 *  -   Created the basic interface for the project (n x n grid).
 *  -   Display output function dynamically edits the number of grids based on user output request
 */





// Variable to house Grid Creation Values:
let numberOfGrids = 0;

 /** 
  * This function will create a n * n grid based on the numberOfGrids the user has requested.
  * 
  * @param none 
  * 
  */ 

function gridCreation()
{

    // Clear the board before applying the new number of requested grids:
    clearBoard();

    for (let i = 0; i < numberOfGrids; i++)
    {

        for (let x = 0; x < numberOfGrids; x++)
        {
            const newDiv = document.createElement('div');
            newDiv.className = 'newGrids';

            /*
                An event listener that will add a class on a mouseover. The class is responsible for changing colors 
                based on user selection.
            */
             newDiv.addEventListener('mouseover', e => e.target.classList.add('userColorSelection'))

            container.appendChild(newDiv);
        }
    
        
    }

    // Set the value displayed beside the output slider to user selected output
    document.getElementById('userOutputText').value = numberOfGrids;

}



/**
 * This function will display the output value requested by the user.
 * It will also house the number of reptitions (output value) requested by the user
 * 
 * Finally, the function will call the gridCreation function to execute the user request.
 * 
 * @param outputRequest user inputted value from slider
 * 
 */

function displayOutputValue(outputRequest)
{
    
    numberOfGrids = outputRequest;

    //  Set the number of grid in the CSS variable to be equal to the desired value the user has input:
    container.style.setProperty('--numberOfRepititions', outputRequest);

    gridCreation();

}



/**
 * This function clears the board when called
 * 
 * @param none
 * 
 */

function clearBoard()
{

    // Remove all the divs appended to the parent div:
    let removeFromParentDiv = document.getElementById('container');
    while (removeFromParentDiv.firstChild)
    {
        removeFromParentDiv.removeChild(removeFromParentDiv.firstChild);
    }

    // Set the value displayed beside the output slider back to 0 once the user clears the board
    document.getElementById('userOutputText').value = 0;

}



/**
 * These functions will change the userColorSelection class's background color to what they've requested
 * 
 * @param none
 */

 function userRequestRed()
 {
    /* To select variables in root we need to reference the root node by utilizing documentElement. */
    document.documentElement.style.setProperty('--userSelectedBackgroundColor', 'rgb(139, 40, 41)');
 }

 function userRequestBlue()
 {
    document.documentElement.style.setProperty('--userSelectedBackgroundColor', 'rgb(1, 99, 161)');
 }