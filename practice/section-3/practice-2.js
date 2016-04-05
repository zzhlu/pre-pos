function create_updated_collection(collection_a, object_b) {

	for(var i = 0; i < collection_a.length; i++)
	{
		if(isExist(collection_a[i].key, object_b.value))
		{
			if(collection_a[i].count >= 3)
				collection_a[i].count -= parseInt(collection_a[i].count/3);	
		}
	}

	return collection_a;
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
