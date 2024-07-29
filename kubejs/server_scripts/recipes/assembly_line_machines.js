ServerEvents.recipes(event => {


	event.remove({output: 'assemblylinemachines:empowered_conduction_component'})
	event.shaped(
	  Item.of('assemblylinemachines:empowered_conduction_component'), 
	  [
	    'CEC',
		'EAE',
		'CEC'
	  ], 
	  {
		C: 'assemblylinemachines:conduction_component',
		E: 'assemblylinemachines:energized_gold_ingot',
		A: 'cataclysm:ancient_metal_ingot'
	  }
	)
	
	
})