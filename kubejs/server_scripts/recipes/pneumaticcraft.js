ServerEvents.recipes(event => {


	event.remove({output: 'pneumaticcraft:reinforced_stone'})
	event.shaped(
	  Item.of('4x pneumaticcraft:reinforced_stone'), 
	  [
	    'ESE',
		'SCS',
		'ESE'
	  ], 
	  {
		E: 'powah:steel_energized',
		S: '#forge:stone',
		C: 'pneumaticcraft:ingot_iron_compressed'
	  }
	)
	
	
})