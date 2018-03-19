var apiBaseUrl = 'https://www.thesportsdb.com/api/v1/json/1/';
var searchTeamsByLeagueUrl = 'search_all_teams.php?l=';
var teamDetails = 'lookupteam.php?id=';

function callApi(restOfUrl, callback){
    $.getJSON(apiBaseUrl + restOfUrl).done(function(results){
        callback(results);
    }).fail(function(error){
        console.log(error);
        alert('Uh oh, something went wrong calling the API');
    });
}