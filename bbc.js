// BBC News date HTML:
// the date is embedded within the JSON metadata of a <script> element; the
// object's key is called "datePublished".  If there is no <script> element
// containing a "datePublished" key, then the publication date/time is stored
// within a <time> element in the "datetime" attribute

jQuery( function( $ ) {
	// Extract the publication date from the page HTML
        var published = '';
        let scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        let scriptWithDatePublished = scripts.filter(
            script => /datePublished/.test(script.innerText)
        )[0];
        if (scriptWithDatePublished !== '') {
            let pageMetadta = JSON.parse(scriptWithDatePublished.innerText);
            published = pageMetadta.datePublished;
        }
        else {
            published = document.querySelector('time[data-testid="timestamp"').getAttribute('datetime');
        }
	
	// Pass the date string to the date-checking function
	dateCheck( published );
} );

