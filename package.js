Package.describe({
  summary: "Twitter-api to use for posting tweets"
});

Package.on_use(function(api) {
  api.use('underscore', ['server']);
  api.use('accounts-base', ['server']);
  // Export Accounts (etc) to packages using this one.
  api.use('accounts-oauth', ['server']);
  api.use('twitter', [ 'server']);

  api.use('http', ['client', 'server']);

  api.add_files('twitter-api.js', 'server');
});
