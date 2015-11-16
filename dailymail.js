// (Current UK) Dailymail date HTML:
// <meta itemprop="datePublished" content="2015-11-15T21:22:14+0000"/>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'meta[itemprop="datePublished"]' ).attr( 'content' );
	
    // Pass the date string to the date-checking function
	dateCheck( published );
} );

