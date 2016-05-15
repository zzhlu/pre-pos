function create_updated_collection(collection_a, object_b) {

  collection_a.forEach(function (element) {
    if (isExist(element.key, object_b.value)) {
      element.count--;
    }
  });

  return collection_a;
}

function isExist(element, collection) {

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] === element)
      return true;
  }

  return false;
}
