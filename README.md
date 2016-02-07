## Bigquery datasets selector
Tables will be listed and available for selection after a dataset is selected.

### Usage
Requires a [bigquery-datasets-selector](https://github.com/tejohnso/bigquery-datasets-selector) somewhere on the page.  See the test section for a working example.

### Development set up
```
bower install bigquery-datasets-selector
cd bower_components
rm -rf bigquery-tables-selector && git clone https://github.com/tejohnso/bigquery-tables-selector.git
cd bigquery-tables-selector
npm install
```

### Test

 - Expects Chrome via /usr/bin/google-chrome-stable
 - Requires an http server (eg: `npm install -g http-server`)

```
npm install -g http-server
npm install -g selenium-standalone
npm run setup-test-env
npm test
npm run teardown-test-env
```
