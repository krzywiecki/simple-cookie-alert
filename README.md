Simple cookie alert
===================

Simpla JavaScript plugin with EU cookie law.


Basic usage
-----------

```
<script src="simple-cookie-alert.js"></script>
<script>
    new SimpleCookieAlert();
</script>
```

Custom usage
------------

```
<script src="simple-cookie-alert.js"></script>
<script>
    new SimpleCookieAlert({
    	text: @string@ 'My own message about cookies policy.',
        readMoreLink: 'http://domain.com/privacy-policy',
        readMoreText: 'Read more',
        acceptButtonText: 'Accept',
        position: 'top'
    });
</script>
```

Options
-------
`text`: `String`, default: `'This website uses cookies to ensure you get the best experience on our website.'`

`readMoreLink`: `String`, default: `null`

`readMoreText`: `String`, default: `null`

`acceptButtonText`: `String`, default: `'OK'`

`theme`: `'dark'` or `'light'`, default: `'dark'`

`position`: `'bottom'` or `top`, default: `bottom`

Contributing
------------
Install all necessary dependencies:
```
npm install
```
Live reload for development:
```
gulp watch
```
Production build:
```
gulp
```

License
-------

MIT - Do anything you want