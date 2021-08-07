// New York Times date HTML:
// <meta data-rh="true" property="article:published_time" content="2021-08-07T09:00:26.000Z"/>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'meta[property="article:published_time"]' ).attr( 'content' );
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

