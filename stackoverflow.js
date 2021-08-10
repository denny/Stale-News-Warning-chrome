// Stackoverflow Date HTML:
// <p class="label-key" title="2014-06-02 16:57:19Z"><b>1 year ago</b></p>

jQuery( function( $ ) {
  // Extract the publication date from the page HTML
  var published = $('table#qinfo td:contains("asked")').next('td').find('p').attr('title');

  // Pass the date string to the date-checking function
  dateCheck( published );
} );
