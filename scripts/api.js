var urls = {
    apiBaseUrl: 'https://www.thesportsdb.com/api/v1/json/1/',
    searchTeamsByLeagueUrl: 'search_all_teams.php?l=',
    teamDetails: 'lookupteam.php?id=',
    teamPlayers: 'lookup_all_players.php?id=',
}

function callApi(restOfUrl, callback){
    $.getJSON(urls.apiBaseUrl + restOfUrl).done(function(results){
        callback(results);
    }).fail(function(error){
        console.log(error);
        alert('Uh oh, something went wrong calling the API');
    });
}