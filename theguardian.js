// (Current UK) Guardian date HTML:
// <time itemprop="datePublished" datetime='2015-11-14T12:00:05+0000'
//   data-timestamp="1447502405000" class="content__dateline-wpd js-wpd">
// Saturday 14 November 2015 <span class="content__dateline-time">12.00 GMT</span>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published = $( 'time[itemprop="datePublished"]' ).attr( 'datetime' );

	// Pass the date string to the date-checking function
	dateCheck( published );
} );

