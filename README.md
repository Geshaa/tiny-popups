# Development

---

* Delete folder **demo**
* Remove the following block of code from the head of index.html:
```
<!-- Delete me on production -->
<link rel="stylesheet" href="demo/demo.css" type="text/css">
<script src="demo/demo.js"></script>
```
* Delete README.md file
* Get what you need from head.html and then delete it
* Run `npm install`
* Run `grunt`
* Code!

# Production

---

* Open Gruntfile.js and change `uglify > options > sourceMap: false` and `less > development > sourceMap: false`
* Delete `assets/css/style.css.map` and `assets/js/scripts.min.map`
* Remove the following line of code from the head of index.html (and other heads, if used):
```
<script src="http://localhost:35729/livereload.js"></script>
```

# Settings

---

### JavaScript modules

To change the modules which you use open file `src/js/modules.json` and edit as required. To reload the configuration restart grunt

### Live reload
If you do not want to use LiveReload remove the following line of code from the head tag:
```
<script src="http://localhost:35729/livereload.js"></script>
```