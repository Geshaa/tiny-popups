# Tiny Popups
With this script and styles you can easily make popups of every html element that you need.They are
some small examples for extremely easy customisable popups. You can find deme here - http://givanov.eu/projects/popup/public/
All the functionality are based on data elements and there are no classes.

---

### Dependencies
	* jQUery

### Markup
	* You must add data-overlay="popup" on html element that will be used as a overlay.
	* You must add data-popup="popupName" on html element that will hold popup content. You can insert everything inside it.
	* If you add data-off-timer="5000" on html element that will be popup, it will automaticaly close after value inside data-off-time. Value is in miliseconds.
	* You must add data-popup-open="popupName" on element that will trigger openning of popup. "popupName" value must be the same as data-popup. If you use multiple popups, each of them need to have different name.
	* You must add data-popup-close="popupName" on button that will close popup. The rule about naming here is the same like previous point.
	* If you add data-position="left" to button that will close the popup - it will be on the top left of popup. You can put "right" as well.

### LESS
	* Check src/front/less/style.less to see basic styles. Every different popup can be styled separately.

* Remove the following block of code from the head of index.html:
```
<!-- Delete me on production -->
<script src="//localhost:35730/livereload.js"></script>
```

=======
