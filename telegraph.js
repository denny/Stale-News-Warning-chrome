// (Current) Telegraph date HTML:
// <meta itemprop="datePublished" content="2016-01-24"/>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'meta[itemprop="datePublished"]' ).attr( 'content' );
	
    // Pass the date string to the date-checking function
	dateCheck( published );
} );

