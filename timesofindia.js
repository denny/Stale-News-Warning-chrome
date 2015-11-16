// Times of India date HTML:
// <span style="margin-top:5px; display:block" class="byline">
//	<span style="display: inline-block;vertical-align: middle;">
//		<a class="italic" rel="author" href="/toireporter/author-Shariq-Majeed-479222339.cms">Shariq Majeed</a>
//		<span class="hide_new" id="authortext">Shariq Majeed</span>
//		,TNN
//		<span>|</span>
//		Oct 8, 2015, 06.56 AM IST
//	</span>
//	<div style="clear:both"></div>
// </span>

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
	var published;
	$( 'span[class="byline"]' ).contents().each( function() {
		// Within this iterator function, jQuery sets `this` to be
		// each child node (including Text nodes, not just Elements)
		if ( this.nodeType === 3 ) { // 3 = text node
			if ( this.nodeValue.match( ' IST$' ) ) {
				published = this.nodeValue;
			}
		}
	});
	published = published.replace( /,[^,]+$/, '' );
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

