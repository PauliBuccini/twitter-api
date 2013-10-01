Package.describe({
  summary: "Twitter-api to use for posting tweets"
});

Package.on_use(function (api, where) {
  api.use('accounts-twitter', 'server');
  api.use('oauth1', 'server');

  api.export && api.export('TwitterSpark', 'server');

  api.add_files(['twitter-api.js'], 'server');
});

Package.on_test(function (api) {
});
