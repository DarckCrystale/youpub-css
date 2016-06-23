/* Rédaction par DarckCrystale                                     */
/* Pour toute question, contactez-moi par MP sur youpub-forum.com, */
/* par mail à crystale.darck@gmail.com ou sur Facebook/Twitter     */

$(document).ready(function () {
    /* Liens contenus dans les div de vote, qui permettent de up-voter une réponse */
    var upvoteLinks = $('.vote-button a[href*="eval=plus"]');
    upvoteLinks.each(function( index ) {
        var upvoteLink = $( this );
        upvoteLink.css("opacity", "0");
        upvoteLink.css("display", "block");
        upvoteLink.css("width", "20px");
        upvoteLink.css("height", "20px");
        upvoteLink.attr('title', 'J\'aime ce post');
    });
    
    /* Liens contenus dans les div de vote, qui permettent de down-voter une réponse */
    var downvoteLinks = $('.vote-button a[href*="eval=minus"]');
    downvoteLinks.each(function( index ) {
        var downvoteLink = $( this );
        downvoteLink.css("opacity", "0");
        downvoteLink.css("display", "block");
        downvoteLink.css("width", "20px");
        downvoteLink.css("height", "20px");
        downvoteLink.attr('title', 'Je n\'aime pas ce post');
    });
    
    /* Div de vote qui permettent de down-voter une réponse */
    var downvoteDivs = $('.vote-button:last-child');
    downvoteDivs.each(function( index ) {
        var downvoteDiv = $( this );
        /* Ici, on tourne le pouce : une seule icône utilisée à deux endroits, c'est moins lourd à charger */
        downvoteDiv.css("-ms-transform", "rotate(180deg)");
        downvoteDiv.css("-webkit-transform", "rotate(180deg)");
        downvoteDiv.css("transform", "rotate(180deg)");
    });
    
    /* Div qui contiennent les stuffs pour voter */
    var allvoteDivs = $('.vote');
    allvoteDivs.each(function( index ) {
        var allvoteDiv = $( this );
        /* Permet d'aligner les trois trucs horizontalement */
        allvoteDiv.css("width", "80px");
    });
    
    /* Divs de vote */
    var voteDivs = $('.vote .vote-button, .vote .vote-no-bar');
    voteDivs.each(function( index ) {
        var voteDiv = $( this );
        /* Permet d'aligner les trois trucs horizontalement */
        voteDiv.css("float", "left");
        /* Eloigne les icônes d'une distance respectable */
        voteDiv.css("margin", "10px");
        voteDiv.css("background-image", "url(http://img15.hostingpics.net/pics/917250iconesyt.png)");
        /* Définit la taille de l'image pour qu'elle soit affichée correctement */
        voteDiv.css("background-size", "20px 20px");
        voteDiv.css("background-repeat", "no-repeat");
        voteDiv.css("background-position", "center center");
    });
    
    /* Petite barre qui sépare les deux boutons de vote */
    var voteBars = $('.vote-no-bar');
    voteBars.each(function( index ) {
        var voteBar = $( this );
        /* Cache l'élément */
        voteBar.css("display", "none");
    });

});

