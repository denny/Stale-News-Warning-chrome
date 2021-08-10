// India Times date HTML:
// <div class="fl author_cont"><span class="fl"><img src="http://media.indiatimes.in/resources/images/indiatimes_author.jpg"/></span><div class="author_cont"><div class="author_fix"> By IndiaTimes</div><div>April 6, 2014</div></div></div></div></div>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'div[class="fl author_cont"]'
		).find( 'div[class="author_cont"]' ).find( 'div:not([class])' ).text();

	// Pass the date string to the date-checking function
	dateCheck( published );
} );

