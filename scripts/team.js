$(document).ready(function(){
    var team = getUrlParameter('team');
    callApi(teamDetails+team, function(results){
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
