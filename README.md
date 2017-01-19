# mean_template

### After cloning...

```
npm init
npm install
npm install -g express body-parser path ejs bower
```

> creates node_modules, -g: global

```
bower init
bower install jquery angular angular-route angular-sanitize bootstrap --save
```

> creates bower_components/, --save: saves into bower.json

```
node server.js
```
##### To run on Firefox
> Open browser at localhost:8080/

##### [DRAFT] To run on Chrome for dev purposes:
> Chrome does not support CORS (cannot get 3rd party API results thru localhost). As a workaround, this will disable web security for that instance of Chrome.
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
--user-data-dir="C:/Chrome dev session2" --disable-web-security
```

##### TO-DO
1. Add ng-cloak into custom css.
2. Fix image loading.
3. Make able to load to Chrome.