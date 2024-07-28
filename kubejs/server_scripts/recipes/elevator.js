ServerEvents.recipes(event => {


	event.remove({output: 'elevatorid:elevator_white'})
	event.shaped(
	  Item.of('elevatorid:elevator_white'), 
	  [
	    'WWW',
		'WAW',
		'WWW'
	  ], 
	  {
		W: 'minecraft:white_wool',
		A: 'mekanism:alloy_infused'
	  }
	)
	
	
})