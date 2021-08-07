// (Current UK) Dailymail date HTML:
// <meta property ="article:published_time" content="2021-08-07T00:43:23+0100" />

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'meta[property="article:published_time"]' ).attr( 'content' );
	
    // Pass the date string to the date-checking function
	dateCheck( published );
} );

