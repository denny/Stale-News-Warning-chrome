// (Current) Huffington Post date HTML:
// <meta property="article:published_time" content="2021-08-06T14:08:48.000Z">

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'meta[property="article:published_time"]' ).attr( 'content' );
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

