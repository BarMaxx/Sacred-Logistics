ServerEvents.recipes(event => {


	event.remove({output: 'ironjetpacks:basic_coil'})
	event.shaped(
	  Item.of('ironjetpacks:basic_coil'), 
	  [
	    ' EA',
		'ESE',
		'AE '
	  ], 
	  {
		A: 'mekanism:alloy_infused',
		E: 'powah:steel_energized',
		S: '#forge:rods/wooden'
	  }
	)
	
	
})