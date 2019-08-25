'use strict';

const run = require('./run');
const saveDefaultBlueprint = require('./save-default-blueprint');

module.exports = async function bootstrap() {
  let defaultBlueprint = {
    name: 'ember-cli'
  };

  let cwd = process.cwd();

  await saveDefaultBlueprint({
    cwd,
    defaultBlueprint
  });

  await run('git add ember-cli-update.json');
};