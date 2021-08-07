// (Current UK) Sky News
// the date is embedded within the JSON metadata of a <script> element; the
// object's key is called "datePublished"

jQuery( function( $ ) {
	// Extract the publication date from the page HTML/script
        let scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        let scriptWithDatePublished = scripts.filter(
            script => /datePublished/.test(script.innerText)
        )[0];
        let pageMetadta = JSON.parse(scriptWithDatePublished.innerText);
        let published = pageMetadta.datePublished;

	// Pass the date string to the date-checking function
	dateCheck( published );
} );

