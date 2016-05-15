function count_same_elements(collection) {
  
  var newArray = [];
  
  collection.forEach(function (element) {
    var item = findExistItem(element[0], newArray);
    if (item) {
      if (element.length > 1) {
        item.count += parseInt(element[2]);
      } else {
        item.count++;
      }
    } else {
      if (element.length > 1) {
        newArray.push({key: element[0], count: parseInt(element[2])});
      } else {
        newArray.push({key: element, count: 1});
      }
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
