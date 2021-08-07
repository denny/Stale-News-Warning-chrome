// (Current) Telegraph date HTML:
// <meta name="DCSext.articleFirstPublished" content="2021-08-07 07:24"/>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'meta[name="DCSext.articleFirstPublished"]' ).attr( 'content' );
	
    // Pass the date string to the date-checking function
	dateCheck( published );
} );

