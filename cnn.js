// CNN News date HTML:
// <meta content="2021-08-07T00:32:40Z" name="pubdate">

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'meta[name="pubdate"]' ).attr( 'content' );
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

