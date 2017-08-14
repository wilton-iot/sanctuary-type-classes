var benchmark = require('./old-vs-new.js');

benchmark({
  leftHeader: 'old',
  rightHeader: 'new',
  match: 'functions/**'
});
