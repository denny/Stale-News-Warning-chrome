// (Current) New York Times date HTML:
// <time class="dateline" datetime="2015-11-06" itemprop="datePublished"
//     content="2015-11-06">NOV. 6, 2015</time>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'time[itemprop="datePublished"]' ).attr( 'content' );
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

