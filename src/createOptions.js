const { program, Option } = require('commander');

const createOptions = () => {
  program
    .version('0.0.1')
    .option('-s, --server', 'runs an HTTP server to view the website')
    .option('-g, --git', 'initializes a Git repository in the project')
    .addOption(new Option('-t, --template <template>', 'creates the project with a CSS framework template').choices(['bootstrap', 'tailwind', 'bulma']));
  
  program.parse(process.argv);
  const options = program.opts();
  return options;
}

module.exports = createOptions;