/* Rédaction par DarckCrystale                                     */
/* Pour toute question, contactez-moi par MP sur youpub-forum.com, */
/* par mail à crystale.darck@gmail.com ou sur Facebook/Twitter     */

$(document).ready(function () {
    var voteDivs = $('.vote');
    voteDivs.each(function( index ) {
        /* Récupération des infos à parser */
        var votebar = $( this ).find('.vote-bar');
        var votesDecompte = votebar.attr('title');
        
        /* Récupération du pourcentage de votes positifs */
        var regexPourcentVotesPositifs = /\: (.*?)\%/;
        var pourcentageVotesPositifs = regexPourcentVotesPositifs.exec(votesDecompte)[1];
        
        /* Récupération du nombre de votes total */
        var regexNombreVotesTotaux = /\((.*?) vote/;
        var nombreVotesTotaux = regexNombreVotesTotaux.exec(votesDecompte)[1];
        
        /* Détermination du nombre de votes positifs et négatifs */
        var nombreVotesPositifs = nombreVotesTotaux * pourcentageVotesPositifs / 100;
        var nombreVotesNegatifs = nombreVotesTotaux - nombreVotesPositifs;
        
        /* Fabrication de la tooltip qui indique le nombre de votes pour le topic */
        var title = '';
        if (nombreVotesPositifs > 0) {
            title += nombreVotesPositifs;
            if (nombreVotesPositifs > 1) {
                title += ' personnes aiment';
            } else {
                title += ' personne aime';
            }
            if (nombreVotesNegatifs > 0) { 
                title += ', ';
            }
        } 
        if (nombreVotesNegatifs > 0) {
            title += nombreVotesNegatifs;
            if (nombreVotesNegatifs > 1) {
                title += ' personnes n\'aiment pas';
            } else {
                title += ' personne n\'aime pas';
            }
        }
        
        $( this ).attr('title', title);
        
        /* Fabrication de la boîte qui contient la barre de vote */  
        var widthLikes = nombreVotesPositifs / nombreVotesTotaux * 100;
        var widthUnlikes = 100 - widthLikes;
        var boite = '<div class="video-extras-sparkbars" title="' + title + '">' +
                        '<div class="video-extras-sparkbar-likes" style="width: ' + widthLikes + '%"></div>' +
                        '<div class="video-extras-sparkbar-dislikes" style="width: ' + widthUnlikes + '%"></div>' +
                    '</div>'    ;  
        $(boite).prependTo($( this ));
    });
    
    /* Boîtes d'origine qui montrent le score des posts */
    var voteBarOrigins = $('.vote-bar');
    voteBarOrigins.each(function( index ) {
        /* Cache la boîte */
        var voteBarOrigin = $( this );
        voteBarOrigin.css("display", "none");
    });
    
    /* Nouvelles boîtes du score des posts */
    var voteBarNouvelles = $('.video-extras-sparkbars');
    voteBarNouvelles.each(function( index ) {
        var voteBarNouvelle = $( this );
        /* Définit les dimensions */
        voteBarNouvelle.css("margin-left", "5px");
        voteBarNouvelle.css("margin-right", "5px");
        voteBarNouvelle.css("margin-top", "5px");
        voteBarNouvelle.css("height", "6px");
        /* Cache ce qui dépasse (évite l'apparition de scrollbar) */
        voteBarNouvelle.css("overflow", "hidden");
    });
    
    /* Barres de nombre de likes */
    var voteUps = $('.video-extras-sparkbar-likes');
    voteUps.each(function( index ) {
        var voteUp = $( this );
        /* Aligne la barre sur la gauche */
        voteUp.css("float", "left");
        /* Définit la hauteur */
        voteUp.css("height", "100%");
        /* Couleur */
        voteUp.css("background", "#167ac6");
    });
    
    /* Barres de nombre de dislikes */
    var voteDowns = $('.video-extras-sparkbar-dislikes');
    voteDowns.each(function( index ) {
        /* Cache la boîte */
        var voteDown = $( this );
        /* Aligne la barre sur la gauche */
        voteDown.css("float", "left");
        /* Définit la hauteur */
        voteDown.css("height", "100%");
        /* Couleur */
        voteDown.css("background", "#ccc");
    });
    
});









