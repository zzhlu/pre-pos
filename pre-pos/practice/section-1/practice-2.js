function collect_same_elements(collection_a, collection_b) {
	
	var newArray = [];

	for(var k = 0; k < collection_a.length; k++)
	{
		for(var i = 0; i < collection_b.length; i++)
		{
			if(isExist(collection_a[k], collection_b[i]))
				newArray.push(collection_a[k]);
		}
	}	

	return newArray;	
}

function isExist(element, collection)
{
	for(var i = 0; i < collection.length; i++)
	{
		if(element === collection[i])
			return true;
	}

	return false;
}


 
