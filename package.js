Package.describe({
  name: "bjwiley2:server-watch",
  version: "0.0.7",
  // Brief, one-line summary of the package.
  summary: "Enables third party server pinging functionality",
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/NewSpring/meteor-serverWatch.git",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.use("meteor-base@1.0.1");
  api.use("mongo")
  api.use("http@1.1.0");
  api.use("coffeescript@1.0.9");

  api.addFiles("shared.coffee");
  api.addFiles("server.coffee", "server");
  api.addFiles("client.coffee", "client");

  api.export("serverWatch");
});
