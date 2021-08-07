// Stackoverflow Date HTML:
// <time itemprop="dateCreated" datetime="2021-08-07T10:45:44">today</time>

jQuery( function( $ ) {
  // Extract the publication date from the page HTML
  var published = $('time[itemprop="dateCreated"]').attr('datetime');
  
  // Pass the date string to the date-checking function
  dateCheck( published );
} );
