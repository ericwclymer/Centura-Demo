$(document).ready(function(){
    var team = getUrlParameter('team');
    callApi(urls.teamDetails+team, function(results){
        console.log(results);
        var team = results.teams[0];
        $('#team-description').text(team.strDescriptionEN);
        $('#header').text(team.strTeam);
        var imagesEl = $('#team-images');
        var images = [team.strStadiumThumb,team.strTeamBadge,team.strTeamBanner,team.strTeamFanart1,team.strTeamLogo];
        for(var i = 0; i < images.length; i++){
            var newImage = '<img class="team-image" src="'+images[i]+'"/>'
            imagesEl.append(newImage);
        }
    });

    callApi(urls.teamPlayers+team, function(results){
        console.log(results);
        var players = results.player;
        var tableBodyElement = $('#results-body');
        for(var i = 0; i < players.length; i++){
            var player = players[i];
            var newRow = '<tr>';
            newRow += '<td><a href="player.html?player='+player.idPlayer+'">' + player.strPlayer + '</a></td>';
            newRow += '<td>' + player.strPosition + '</td>';
            newRow += '<td>' + player.strWage + '</td>';
            newRow += '<td>' + player.strHeight + '</td>';
            newRow += '<td>' + player.strWeight + '</td>';
            newRow += '<td><img class="player-image" src="' + player.strCutout + '"/></td>';
            newRow += '</tr>';
            tableBodyElement.append(newRow);
        }
    })
});

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
