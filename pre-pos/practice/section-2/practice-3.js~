function count_same_elements(collection) {

	var newArray = [];

	var element_number = 1;
	
	for(var i = 0; i < collection.length; i++)
	{
		if(collection[i].length > 1)
		{
			var number = parseInt(collection[i].substring(2));

			for(var k = 0; k < number; k++)
				collection.splice(i, 0, collection[i].charAt(0));

			collection.splice(i+number, 1);
		}
	}

	for(var i = 0; i < collection.length; i++)
	{
		if(collection[i] === collection[i+1])
			element_number++;
		else
		{
			newArray.push({name: collection[i], summary: element_number});
			element_number = 1;
		}
	}

	return newArray;
}

 
