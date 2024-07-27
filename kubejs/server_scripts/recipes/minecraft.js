ServerEvents.recipes(event => {


	event.remove({output: 'minecraft:stone_pickaxe'})
	event.shaped(
	  Item.of('minecraft:stone_pickaxe'), 
	  [
	    'SSS',
		' P ',
		' P '
	  ], 
	  {
		S: '#forge:stone',
		P: '#forge:rods/wooden'
	  }
	)
	
	
})