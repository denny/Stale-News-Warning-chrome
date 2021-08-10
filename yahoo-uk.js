// (Current) Yahoo date HTML:
// <abbr title="2012-08-23T10:58:41Z">Thu, Aug 23, 2012</abbr>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'abbr' ).attr( 'title' );

	// Pass the date string to the date-checking function
	dateCheck( published );
} );

