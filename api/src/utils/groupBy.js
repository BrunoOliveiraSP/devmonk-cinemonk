

var groupBy = function(array, key) {
    return array.reduce(function(rv, x) {
      let group = rv.find(item => item.key === x[key]);
      if (!group) {
        group = []
        group.key = x[key]
        rv.push(group);
      }
      group.push(x)
      return rv;
    }, []);
  };
  
export default groupBy;