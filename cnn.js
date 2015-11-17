// CNN News date HTML:
// <p class="update-time">Updated 1615 GMT (0015 HKT) November 5, 2015 <span id="js-pagetop_video_source" class="video__source top_source"></span></p>
// OR: <div class="cnn_strytmstmp"><script type="text/javascript">if(location.hostname.indexOf( 'edition.' ) > -1) {document.write('January 13, 2010 -- Updated 1451 GMT (2251 HKT)');} else {document.write('January 13, 2010 9:51 a.m. EST');}</script></div>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = '';
	published = $( 'p[class="update-time"]' ).text();
	published = published.replace( /^.*\)/i, '' );
	published = published.replace( /\|.*$/i, '' );
	
	if ( published == '' ) {
		published = $( 'div[class="cnn_strytmstmp"]' ).text();
		published = published.replace( /^.*}/i, '' );
		published = published.replace( /--.*$/i, '' );
	}
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

