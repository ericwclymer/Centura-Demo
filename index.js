var apiBaseUrl = 'https://www.thesportsdb.com/api/v1/json/1/';
var apiSearchTeamsByLeagueUrl = 'search_all_teams.php?l=';



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

        var fullUrlToSearch = apiBaseUrl + apiSearchTeamsByLeagueUrl + text;
        $.getJSON(fullUrlToSearch).done(function(results){
            console.log(results);
            alert('Fetched teams. See console for details');
        }).fail(function(error){
            console.log(error);
            alert('There was an error. See console for details');
        })
    });
});