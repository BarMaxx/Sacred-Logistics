ServerEvents.recipes(event => {


	event.remove({output: 'byg:chain_plating'})
	event.shaped(
	  Item.of('2x byg:chain_plating'), 
	  [
	    'NPN',
		'P P',
		'NPN'
	  ], 
	  {
		N: 'minecraft:iron_nugget',
		P: '#forge:plates/iron'
	  }
	)
	
	
})