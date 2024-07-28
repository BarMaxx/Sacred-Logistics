ServerEvents.recipes(event => {


	event.remove({output: 'pipez:item_pipe'})
	event.shaped(
	  Item.of('8x pipez:item_pipe'), 
	  [
	    'III',
		'DAD',
		'III'
	  ], 
	  {
		I: 'minecraft:iron_ingot',
		A: 'mekanism:alloy_infused',
		D: 'minecraft:dropper'
	  }
	)
	
	
	event.remove({output: 'pipez:fluid_pipe'})
	event.shaped(
	  Item.of('8x pipez:fluid_pipe'), 
	  [
	    'III',
		'BAB',
		'III'
	  ], 
	  {
		I: 'minecraft:iron_ingot',
		A: 'mekanism:alloy_infused',
		B: 'minecraft:bucket'
	  }
	)
	
	
	event.remove({output: 'pipez:energy_pipe'})
	event.shaped(
	  Item.of('8x pipez:energy_pipe'), 
	  [
	    'III',
		'RAR',
		'III'
	  ], 
	  {
		I: 'minecraft:iron_ingot',
		A: 'mekanism:alloy_infused',
		R: 'minecraft:redstone_block'
	  }
	)
	
	
	event.remove({output: 'pipez:gas_pipe'})
	event.shaped(
	  Item.of('8x pipez:gas_pipe'), 
	  [
	    'III',
		'BAB',
		'III'
	  ], 
	  {
		I: 'minecraft:iron_ingot',
		A: 'mekanism:alloy_infused',
		B: 'mekanism:basic_control_circuit'
	  }
	)
	
	
})