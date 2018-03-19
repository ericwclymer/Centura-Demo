$(document).ready(function(){
    var player = getUrlParameter('player');
    callApi(urls.playerDetails+player, function(results){
        console.log(results);
        var player = results.players[0];
        $('#player-description').text(player.strDescriptionEN);
        if(player.strCutout){
            $('#player-main-image').attr('src', player.strCutout);
        }
        $('#header').text(player.strPlayer);
    });
});