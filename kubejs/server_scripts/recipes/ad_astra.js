ServerEvents.recipes(event => {


	event.remove({output: 'ad_astra:nasa_workbench'})
	event.shaped(
	  Item.of('ad_astra:nasa_workbench'), 
	  [
	    'NTN',
		'PWP',
		'BSB'
	  ], 
	  {
		W: 'minecraft:crafting_table',
		N: 'powah:crystal_nitro',
		T: 'assemblylinemachines:novasteel_plate',
		P: '#forge:plates/steel',
		B: 'pneumaticcraft:printed_circuit_board',
		S: '#forge:storage_blocks/steel'
	  }
	)
	
	
})