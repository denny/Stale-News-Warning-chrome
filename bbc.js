// BBC News date HTML:
// <p class="date date--v1" data-seconds="1447545683"><strong>15 November 2015</strong> Last updated at 00:01 GMT </p>
// OR: <div class="date date--v2" data-seconds="1352293816" data-datetime="7 November 2012">7 November 2012</div>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = '';
	published = $( 'p[class="date date--v1"]' ).find( 'strong' ).text();
	if ( published == '' ) {
		published = $( 'div[class="date date--v2"]' ).attr( 'data-datetime');
	}

	// Pass the date string to the date-checking function
	dateCheck( published );
} );

