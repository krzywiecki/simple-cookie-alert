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
    	text: @string@ (defaut: 'This website uses cookies to ensure you get the best experience on our website.'),
        readMoreLink: 'http://domain.com/privacy-policy' (default: null),
        readMoreText: 'Read more' (default: null),
        acceptButtonText: 'Accept' (default: 'OK'),
        position: 'top' (default: 'OK')
    });
</script>
```

License
-------

MIT - Do anything you want