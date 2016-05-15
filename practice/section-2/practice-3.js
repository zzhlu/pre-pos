function count_same_elements(collection) {

  var newArray = [];

  collection.forEach(function (element) {
    var item = findExistItem(element[0], newArray);
    if (item) {
      if (element.length > 1) {
        item.summary += parseInt(element.substring(2));
      } else {
        item.summary++;
      }
    } else {
      if (element.length > 1) {
        newArray.push({name: element[0], summary: parseInt(element.substring(2))});
      } else {
        newArray.push({name: element, summary: 1});
      }
    }
  });

  return newArray;
}

function findExistItem(element, collection) {

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].name === element) {
      return collection[i];
    }
  }
}
