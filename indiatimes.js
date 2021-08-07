// India Times date HTML:
// <meta data-rh="true" property="article:published_time" content="Sat, 07 Aug 2021 10:40:41 GMT"/>
// OR:
// The date is embedded within the JSON metadata of a <script> element; the
// object's key is called "datePublished"

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
        var published = '';
	let published_time = $( 'meta[property="article:published_time"]' ).attr( 'content' );

        if (published_time === undefined) {
            let scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
            let scriptWithDatePublished = scripts.filter(
                script => /datePublished/.test(script.innerText)
            )[0];
            let pageMetadta = JSON.parse(scriptWithDatePublished.innerText);
            published = pageMetadta.datePublished;
        }
        else {
            published = published_time;
        }
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

