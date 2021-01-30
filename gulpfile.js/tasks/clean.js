const del = require("del");

exports.clean = () => {
  return del(["./dist/*"]);
};
