Package.describe({
  name: 'jrod:react-datepicker',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'A nice easy and mobile friendly meteor react wrapper for TinyDatePicker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JohnRodney/meteor-react-datepicker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'react', 'momentjs:moment']);
  api.addFiles('tiny.js');
  api.addFiles('react-datepicker.css');
  api.addFiles('react-datepicker.jsx');
  api.export('DatePicker')
});
