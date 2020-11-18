/**
 * Author: Inderdeep Klotia
 * JavaScript File: Houses all of the Project Logic
 * 
 * 
 * 
 * Current Version: V: 1.0 
 * Date: Friday, November 13, 2020
 * 
 * 
 * V 1.0: Key Edits
 *  -   Created the basic interface for the project (16 x 16 grid).
 */


// Variable to house Grid Creation Values:
let numberOfGrids = 0;

 /** 
  * This function will create a 16 x 16 grid in the target element.
  * 
  */ 
function gridCreation()
{

    // After first iteration, we need to clear the board before reapplying the number of grids the user has requested:
    let removeFromParentDiv = document.getElementById('container');
    while (removeFromParentDiv.firstChild)
    {
        removeFromParentDiv.removeChild(removeFromParentDiv.firstChild);
    }


    for (let i = 0; i < numberOfGrids; i++)
    {

        for (let x = 0; x < numberOfGrids; x++)
        {
            const newDiv = document.createElement('div');
            newDiv.className = 'newGrids';
            container.appendChild(newDiv);
        }
    
        
    }

}


/**
 * This function will display the output value requested by the user.
 * It will also house the number of reptitions (output value) requested by the user
 * 
 * Finally, the function will call the gridCreation function to execute the user request.
 * 
 * @param outputRequest user inputted value from slider
 */

function displayOutputValue(outputRequest)
{
    
    numberOfGrids = outputRequest;

    //  Set the number of grid in the CSS variable to be equal to the desired value the user has input:
    container.style.setProperty('--numberOfRepititions', outputRequest);

    gridCreation();
}