// (Current UK) Sky News
// <script id="rich-snippet-article" type="application/ld+json">
// {
//         "datePublished": "2015-10-14T12:36:58+01:00",

jQuery( function( $ ) {
	// Extract the publication date from the page HTML/script
    var payload = $("#rich-snippet-article").html();
    var json = JSON.parse(payload);

	// Pass the date string to the date-checking function
	dateCheck( json.datePublished);
} );

