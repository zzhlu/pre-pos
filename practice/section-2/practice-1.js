function count_same_elements(collection) {

  var newArray = [];

  collection.forEach(function (element) {
    var item = findExistItem(element, newArray);
    if (item) {
      item.count++;
    } else {
      newArray.push({key: element, count: 1});
    }
  });

  return newArray;
}

function findExistItem(element, collection) {
  
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].key === element) {
      return collection[i];
    }
  }
}
