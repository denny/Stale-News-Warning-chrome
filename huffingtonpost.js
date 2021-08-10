// (Current) Huffington Post date HTML:
// <span class="posted">
//     Posted: <time datetime="2015-11-15T13:57:53-05:00">
//     15/11/2015 18:57 GMT        </time>
// </span>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'span[class="posted"]' ).find( 'time' ).attr( 'datetime' );

	// Pass the date string to the date-checking function
	dateCheck( published );
} );

