var apiBaseUrl = 'https://www.thesportsdb.com/api/v1/json/1/';
var apiSearchTeamsByLeagueUrl = 'search_all_teams.php?l=';

// when the document has finished processing the resources in the <head> and loaded the body
// run the code inside
$(document).ready(function(){
    console.log('The document has loaded');
    var textElement = $('#my-text');
    var buttonElement = $('button');
    // We're going to query all button elements, and "subscribe" to the "click" event
    // Any time a click event happens on a button element, it will call the following code
    // `clickEvent` contains additional information about the "click" that happened
    buttonElement.click(function(clickEvent){
        console.log(clickEvent);
        // This gets the text input element we created by querying the ID using #
        // Now that we have the text input element, we can get the value from it
        var text = textElement.val();

        var fullUrlToSearch = apiBaseUrl + apiSearchTeamsByLeagueUrl + text;
        $.getJSON(fullUrlToSearch).done(function(results){
            var teams = results.teams;
            console.log(teams);
            var tableBodyElement = $('#results-body');
            for(var i = 0; i < teams.length; i++){
                var team = teams[i];
                var newRow = '<tr>';
                newRow += '<td>' + team.strTeam + '</td>';
                newRow += '<td>' + team.strStadiumLocation + '</td>';
                newRow += '<td>' + team.strStadium + '</td>';
                newRow += '<td>' + team.strManager + '</td>';
                
                newRow += '</tr>';
                tableBodyElement.append(newRow);
            }
        }).fail(function(error){
            console.log(error);
            alert('There was an error. See console for details');
        })
    });

    textElement.keypress(function(keypressEvent){
        if(keypressEvent.keyCode === 13){
            buttonElement.click();
        }
    });
});