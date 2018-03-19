// taken from https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var urls = {
    apiBaseUrl: 'https://www.thesportsdb.com/api/v1/json/1/',
    searchTeamsByLeagueUrl: 'search_all_teams.php?l=',
    teamDetails: 'lookupteam.php?id=',
    teamPlayers: 'lookup_all_players.php?id=',
    playerDetails: 'lookupplayer.php?id='
}

function callApi(restOfUrl, callback){
    $.getJSON(urls.apiBaseUrl + restOfUrl).done(function(results){
        callback(results);
    }).fail(function(error){
        console.log(error);
        alert('Uh oh, something went wrong calling the API');
    });
}