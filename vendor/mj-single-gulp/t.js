// taken and modified from https://github.com/mathjax/MathJax-node#getting-started
var yourMath = process.argv[2];
var mjAPI;
mjAPI = require("./dist/mj-single.js");
// mjAPI = require("./mj-single.js");
mjAPI.config({
  MathJax: {
    SVG: {
      blacker: 10,
      font: 'TeX'
    },
    menuSettings: {semantics: true},
    TeX: {noErrors: {disabled: true}}
  }
});
mjAPI.start();

mjAPI.typeset({
  math: yourMath,
  svg: true,
  dpi: 180,
}, function (data) {
  console.log(JSON.stringify(data));
});
