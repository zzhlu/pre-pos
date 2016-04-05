function create_updated_collection(collection_a, object_b) {

	var collection_c = [];

	var element_number = 1;	

	for(var i = 0; i < collection_a.length; i++)
	{
		if(collection_a[i].length > 1)
		{
			var number = parseInt(collection[i].substring(2));

			for(var k = 0; k < number; k++)
				collection_a.splice(i, 0, collection_a[i].charAt(0));	
			collection_a.splice(i+number, 1);
		}
	}

	for(var i = 0; i < collection_a.length; i++)
	{
		if(collection[i] === collection[i+1])
			element_number++;
		else 
		{
			collection_c.push({key: collection[i], count: element_number});
			element_number = 1;
		}
	}

	for(var i = 0; i < collection_c.length; i++)
	{
		if(isExist(collection_c[i].key, object_b.value))
			if(collection_c[i].count >= 3)
				collection_c[i].count -= parseInt(collection_c[i].count/3);
	}

	return collection_c;	
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


			
