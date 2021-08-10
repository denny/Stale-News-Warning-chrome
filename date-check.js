// Date check function - checks a date to see hold old it is,
// and warns the user via alert()
// Input: published - must be a string that can be parsed by Date()

function dateCheck( published ) {
	//alert( 'Date Published: ' + published );

	// Set up Date objects for publication date and today's date
	var pub_date = new Date( published );
	var now_date = new Date();

	// Find the difference between publication date and today's date
	var diff = new Date( now_date.getTime() - pub_date.getTime() );

	// Calculate difference in years, months, and days
	var year_diff  = diff.getUTCFullYear() - 1970;
	var month_diff = diff.getUTCMonth();
	var day_diff   = diff.getUTCDate() - 1;

	// Pop up a suitable warning based on how stale the article is
	var s = '';
	// TODO: Remove 'over' from warnings if the date diff is exactly X years/months
	var over = '';
	if ( year_diff > 0 ) {
		if ( year_diff > 1 ) { s = 's' };
		alert( 'STALE NEWS WARNING: This article is over ' + year_diff + ' year' + s + ' old!!' );
	}
	else if ( month_diff > 0 ) {
		if ( month_diff > 1 ) { s = 's' };
		alert( 'Stale News Warning: This article is over ' + month_diff + ' month' + s + ' old!' );
	}
	else if ( day_diff > 0 ) {
		if ( day_diff >= 14 ) {
			var week_diff = Math.round( day_diff / 7 );
			if ( day_diff % 7 > 0 ) { over = 'over ' };
			alert( 'Stale News warning: This article is ' + over + week_diff + ' weeks old.' );
		}
		else if ( day_diff >= 3 ) {
			alert( 'Stale News warning: This article is now ' + day_diff + ' days old' );
		}
		else {
			// Article is less than 3 days old - no warning required
			// TODO: Make this configurable
		}
	}
	else {
		// Article is dated today - no warning required
	}
}

