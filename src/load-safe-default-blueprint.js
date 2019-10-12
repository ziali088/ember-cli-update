'use strict';

function loadSafeDefaultBlueprint(projectOptions, version) {
  let type = 'app';
  if (projectOptions.includes('addon')) {
    type = 'addon';
  }

  let options = [];
  if (projectOptions.includes('yarn')) {
    options.push('--yarn');
  }
  if (!projectOptions.includes('welcome') || projectOptions.includes('addon')) {
    options.push('--no-welcome');
  }

  return {
    name: 'ember-cli',
    type,
    version,
    options
  };
}

module.exports = loadSafeDefaultBlueprint;