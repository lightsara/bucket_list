//This is a basic javascript that will be used to create a bucket list site.

//This is a very rough outline of the code that will be used to create the site.
   

//First this conditional statement checks if the document object exists.
if (typeof document !== "undefined") {    //don't want to mess with non-documents

    //Check local storage for saved data.

    //if no data is found, create map with categories and empty arrays.
    //let catArray = [];


    //Get the form element
    const form = document.querySelector('form');
    //console.log(form);

    //Listen for category selection.
    const selectCategory = document.querySelector('category');
    console.log(selectCategory);

    //Listen for submit event
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            //Get the input values
            const input = document.querySelector('input');
            const selectCategory = document.querySelector('select');
            //console.log(input.value);
            //console.log(selectCategory.value);

            //Create a new object
            const newActivity = {
                activity: input.value,
                category: selectCategory.value,
                done: false
            }

            //Add the new object to the array
            myArray.push(newActivity);
            //console.log(myArray);

            //Reset the form
            form.reset();

            //Render the list
            renderList();
        });
    }
    //If läggTill is clicked, add the activity to the map.
        //Get the degree to which the task has been completed. (percentage)


    //If taBort is clicked, remove the activity from the map.

    //Sort key-categories alphabetically.

    //Sort activities according to completion percentage.
        //Secondary sorting condition: Sort activities alphabetically.

    //Render the list of activities according to the above sorting procedure.

    //Represent the list of activities using a heatmap of sorts.
    //a three column table:
    //C1. Activity
    //C2. Category
    //C3. Percentage of completion

    //The heatmap should be updated every time a new activity is added or an existing activity is removed.
    

}