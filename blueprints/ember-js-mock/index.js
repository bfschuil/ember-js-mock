module.exports = {
  description: 'Adds js-mock and ember-jshamcrest to npm dependencies.',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addAddonToProject({name:'ember-jshamcrest', target: 'https://github.com/bfschuil/ember-jshamcrest/tarball/dac2267aeadaa280475581464ed559149b00caae'}).then(() => {
      return this.addPackageToProject('js-mock', '~1.0.0');
    })
  }
};
