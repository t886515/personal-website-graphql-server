const shellargs = require('minimist')(process.argv.slice(2));

module.exports = () => {
  /*
  shellargs is from the params from cli.

  --key=value produce { key : value }, --key produce { key: true }
  -key produce { k: true, e: true, y: true }
  -key=y produce { k: true, e: true, y: "=y" } (????????? unexpected behavior)
  key produce { _:['key'] }
  */

  const data = {
    value: shellargs.value,
    notes: shellargs.notes,
    isComplete: shellargs.isComplete
  };

  return data;
};
