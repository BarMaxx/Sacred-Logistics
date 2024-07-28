ServerEvents.recipes(event => {


	event.remove({output: 'simplemagnets:basicmagnet'})
	event.shaped(
	  Item.of('simplemagnets:basicmagnet'), 
	  [
	    'IIL',
		'IA ',
		'IIR'
	  ], 
	  {
		I: 'minecraft:iron_ingot',
		A: 'mekanism:alloy_infused',
		R: 'minecraft:redstone',
		L: 'minecraft:lapis_lazuli'
	  }
	)
	
	
})