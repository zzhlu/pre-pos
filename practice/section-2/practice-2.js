function count_same_elements(collection) {

	var newArray = [];

	var element_number = 1;

	for(var i = 0; i < collection.length; i++)
	{
		if(collection[i] === collection[i+1])
			element_number++;
		else if(collection[i].length > 1)
		{
			newArray.push({key: collection[i].charAt(0), count: parseInt(collection[i].substring(2))});
			element_number = 1;
		}
		else
		{
			newArray.push({key: collection[i], count: element_number});
			element_number = 1;
		}
	}	

	return newArray;
}
