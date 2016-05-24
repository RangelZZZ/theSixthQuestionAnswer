function collect_same_elements(collection_a, collection_b) {

  var newArray = [];

  for (var i = 0; i < collection_a.length; i++) {

    var element = collection_a[i];

    if (isExist(element, collection_b)) {
      newArray.push(element);
    }
  }

  return newArray;
}

function isExist(element, collection) {

  for (var i = 0; i < collection.length; i++) {
    if (element === collection[i]) {

      return true;
    }
  }

  return false;
}

module.exports = collect_same_elements;
