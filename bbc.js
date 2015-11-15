// (Current) BBC News date HTML:
// <p class="date date--v1" data-seconds="1447545683"><strong>15 November 2015</strong>
//   Last updated at 00:01 GMT </p>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'p[class="date date--v1"]' ).find( 'strong' ).html();
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

