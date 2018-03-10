// when the document has finished processing the resources in the <head> and loaded the body
// run the code inside
$(document).ready(function(){
    console.log('The document has loaded');

    // We're going to query all button elements, and "subscribe" to the "click" event
    // Any time a click event happens on a button element, it will call the following code
    // `clickEvent` contains additional information about the "click" that happened
    $('button').click(function(clickEvent){
        console.log(clickEvent);
        // This gets the text input element we created by querying the ID using #
        var textElement = $('#my-text');
        // Now that we have the text input element, we can get the value from it
        var text = textElement.val();
        alert('You clicked the button! Text was '+text);
    });
});