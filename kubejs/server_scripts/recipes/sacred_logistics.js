ServerEvents.recipes(event => {


	event.remove({output: 'kubejs:photocell'})
	event.shaped(
	  Item.of('kubejs:photocell'), 
	  [
	    'GGG',
		'RBR',
		'OOO'
	  ], 
	  {
		G: '#forge:glass_panes',
		R: 'minecraft:redstone',
		B: 'mekanism:basic_control_circuit',
		O: 'mekanism:ingot_osmium'
	  }
	)
	
	
})