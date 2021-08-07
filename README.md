# Stale News Warning for Chrome

Stale News Warning is a Chrome extension which warns you when you are reading
an old news article.

Currently supported: BBC News, CNN, Daily Mail, The Guardian, Huffington Post,
The Independent, India Times / Times of India, New York Times, Sky News (UK),
Stack Overflow, The Telegraph, Yahoo News, Yahoo News UK

## Install

To install the currently released version of this extension, simply open
Google Chrome, visit the following URL and click on the "Add to Chrome"
button.

https://chrome.google.com/webstore/detail/stale-news-warning/leimdfebooadifmdaofhjkplmpiimlpg

## Development guide

If you wish to develop this extension further, here are some tips to get you
up and going.

Google has written a good [getting started
guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/) which
explains the concepts behind creating and developing a Chrome extension.
Chrome extensions use well-known web technologies such as HTML, CSS and
JavaScript; therefore anyone with experience in these technologies should be
comfortable developing such extensions.  A central part of a Chrome
extension is the manifest file (`manifest.json`) which defines various
metadata about the extension as well as how the source files are combined to
build the extension.  It is not necessary to explicitly build an extension:
one can simply load the unpacked extension into Google Chrome in order to
use and test it.

To load the extension into Google Chrome, start Chrome and navigate to
`chrome://extensions`.  Here you will see the extensions currently available
in your copy of Chrome.  To load an extension, it is necessary to enable
"Developer mode" by clicking on the switch at the top right-hand corner of
the extensions page.  You should now see the buttons "Load unpacked", "Pack
extension" and "Update".  Click on "Load unpacked" and navigate to the
source folder for Stale News Warning and click "Open" in the dialog to
select the folder.  Chrome will now load the extension into your browser and
it should appear in the list of extensions.  More detailed information about
the extension is available by clicking on the "Details" button on the
extension's box in the extensions overview page.

To update or extend the behaviour of the extension for one of the supported
news sites, open the JavaScript file for the relevant news site and update
the code.  You might need to add debugging information (such as an `alert()`
or `console.log()`) to check that your changes are having the desired
effect.  To test your changes, click on the "Update" button for the
extension and open the relevant news site in a new tab.  You should be able
to see in the browser console and/or via an alert what effect your changes
have made.  After making any new changes, be sure to update the extension so
that Chrome has loaded the most recent version of the extension code before
reloading the news site.
