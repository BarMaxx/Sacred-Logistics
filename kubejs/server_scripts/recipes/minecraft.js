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
	
	
	event.remove({output: 'minecraft:iron_pickaxe'})
	event.shaped(
	  Item.of('minecraft:iron_pickaxe'), 
	  [
	    'III',
		' P ',
		' P '
	  ], 
	  {
		I: '#forge:plates/iron',
		P: '#forge:rods/wooden'
	  }
	)
	
	
})