/**
 * E27
 * Created by danli on 2/6/2017.
 */

function zipList(list1, list2) {
  if(list1.length === list2.length) {
    const result = [];
    for(let i = 0; i < list1.length; i++) {
      result.push(list1[i], list2[i]);
    }
    return result;
  }
}

console.log(zipList(['a', 'b', 'c'],[1, 2, 3]));


function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(['a', 'b', 'c'],[1, 2, 3]));
