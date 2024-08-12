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
		W: 'assemblylinemachines:compressed_crafting_table',
		N: 'powah:crystal_nitro',
		T: 'assemblylinemachines:novasteel_plate',
		P: '#forge:plates/steel',
		B: 'pneumaticcraft:printed_circuit_board',
		S: '#forge:storage_blocks/steel'
	  }
	)
	
	
	event.remove({output: 'ad_astra:launch_pad'})
	event.shaped(
	  Item.of('ad_astra:launch_pad'), 
	  [
	    'PNP',
		'CSC',
		'PNP'
	  ], 
	  {
		P: '#forge:plates/steel',
		S: 'ae2:singularity',
		N: 'assemblylinemachines:novasteel_plate',
		C: 'powah:crystal_nitro'
	  }
	)
	
	
	event.remove({output: 'ad_astra:rocket_nose_cone'})
	event.shaped(
	  Item.of('ad_astra:rocket_nose_cone'), 
	  [
	    ' L ',
		'NCN',
		'SCS'
	  ], 
	  {
		L: 'minecraft:lightning_rod',
		N: 'assemblylinemachines:novasteel_plate',
		S: '#forge:plates/steel',
		C: 'sacred_logistics:cobalt_ingot'
	  }
	)
	
	
	event.remove({output: 'ad_astra:rocket_fin'})
	event.shaped(
	  Item.of('ad_astra:rocket_fin'), 
	  [
	    ' S ',
		'SCS',
		'N N'
	  ], 
	  {
		N: 'assemblylinemachines:novasteel_plate',
		S: '#forge:plates/steel',
		C: 'sacred_logistics:cobalt_ingot'
	  }
	)
	
	event.remove({output: 'ad_astra:steel_tank'})
	event.shaped(
	  Item.of('ad_astra:steel_tank'), 
	  [
	    'ACA',
		'BDB',
		'ACA'
	  ], 
	  {
		A: 'sacred_logistics:cobalt_ingot',
		B: 'assemblylinemachines:novasteel_plate',
		C: 'powah:capacitor_hardened',
		D: 'mekanism:ultimate_fluid_tank'
	  }
	)
})