// New York Times date HTML:
// <time class="dateline" datetime="2015-11-06" itemprop="datePublished" content="2015-11-06">NOV. 6, 2015</time>
// OR: <div class="timestamp">Published: January 12, 2010 </div>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = '';
	published = $( 'time[itemprop="datePublished"]' ).attr( 'content' );

	if ( published == '' || !published ) {
		published = $( 'div[class="timestamp"]' ).text();
		published = published.replace( /Published: /, '' );
	}

	// Pass the date string to the date-checking function
	dateCheck( published );
} );

