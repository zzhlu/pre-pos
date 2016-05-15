function create_updated_collection(collection_a, object_b) {

  var collection_c = count_same_elements(collection_a);

  collection_c.forEach(function (element) {
    if (isExist(element.key, object_b.value) && element.count >= 3) {
      element.count -= parseInt(element.count/3);
    }
  });

  return collection_c;
}

function count_same_elements(collection_a) {

  var collection_c = [];

  collection_a.forEach(function (element) {
    var item = findExistItem(element, collection_c);
    if (item) {
      if(element.length > 1) {
        item.count += parseInt(element.substring(2));
      }else{
        item.count++; 
      }
    } else {
      if (element.length > 1) {
        collection_c.push({key: element[0], count: parseInt(element.substring(2))});
      } else {
        collection_c.push({key: element, count: 1});
      }
    }
  });

  return collection_c;
}

function findExistItem(element, collection) {

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].key === element) {
      return collection[i];
    }
  }
}

function isExist(element, collection) {

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] === element) {
      return true;
    }
  }

  return false;
}
