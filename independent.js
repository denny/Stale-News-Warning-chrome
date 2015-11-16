// (Current) Independent date HTML:
// <li title="16 November 2015 18:19 London"><time data-microtimes='{"published":"1447684200000","display":"000","changed":"1447697948000"}' datetime="18:19, 16 November 2015"unixtime="1447697948000">Monday 16 November 2015 18:19 BST</time></li>


jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $('time').attr('datetime').split(',')[1];
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

