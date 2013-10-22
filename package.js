Package.describe({
  summary: "Twitter API for Meteor"
});

Package.on_use(function (api, where) {
  api.use('accounts-twitter', 'server');
  api.use('oauth1', 'server');
  api.use('http', 'server');

  api.export && api.export('TwitterSpark', 'server');

  api.add_files(['twitter-api.js'], 'server');
});

Package.on_test(function (api) {
});
