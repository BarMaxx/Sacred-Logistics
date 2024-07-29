ServerEvents.recipes(event => {


	event.remove({output: 'mekanism:metallurgic_infuser'})
	event.shaped(
	  Item.of('mekanism:metallurgic_infuser'), 
	  [
	    'SFS',
		'GOG',
		'SFS'
	  ], 
	  {
		S: 'assemblylinemachines:pure_steel_ingot',
		F: '#forge:furnaces',
		G: 'assemblylinemachines:energized_gold_plate',
		O: '#forge:ingots/osmium'
	  }
	)
	
	
	event.remove({output: 'mekanism:steel_casing'})
	event.shaped(
	  Item.of('mekanism:steel_casing'), 
	  [
	    'SGS',
		'GCG',
		'SGS'
	  ], 
	  {
		S: '#forge:ingots/steel',
		G: '#forge:glass',
		C: 'kubejs:steel_catalyst'
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_fluid_tank'})
	event.shaped(
	  Item.of('mekanism:basic_fluid_tank'), 
	  [
	    'ROR',
		'OCO',
		'ROR'
	  ], 
	  {
		R: 'minecraft:redstone',
		O: '#forge:ingots/osmium',
		C: 'kubejs:osmium_catalyst'
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_chemical_tank'})
	event.shaped(
	  Item.of('mekanism:basic_chemical_tank'), 
	  [
	    'RSR',
		'SCS',
		'RSR'
	  ], 
	  {
		R: 'minecraft:redstone',
		S: '#forge:ingots/steel',
		C: 'kubejs:osmium_catalyst'
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_control_circuit'})
	event.shaped(
	  Item.of('mekanism:advanced_control_circuit'), 
	  [
	    'ESE',
		'ACA',
		'ESE'
	  ], 
	  {
		A: 'mekanism:alloy_infused',
		C: 'mekanism:basic_control_circuit',
		S: 'assemblylinemachines:pure_steel_plate',
		E: 'assemblylinemachines:energized_gold_plate'
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_control_circuit'})
	event.shaped(
	  Item.of('mekanism:elite_control_circuit'), 
	  [
	    'MSM',
		'ACA',
		'MSM'
	  ], 
	  {
		A: 'mekanism:alloy_reinforced',
		C: 'mekanism:advanced_control_circuit',
		S: 'assemblylinemachines:pure_steel_plate',
		M: 'assemblylinemachines:mystium_plate'
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_control_circuit'})
	event.shaped(
	  Item.of('mekanism:ultimate_control_circuit'), 
	  [
	    'TST',
		'ACA',
		'TST'
	  ], 
	  {
		A: 'mekanism:alloy_atomic',
		C: 'mekanism:elite_control_circuit',
		S: 'assemblylinemachines:pure_steel_plate',
		T: 'assemblylinemachines:attuned_titanium_plate'
	  }
	)
	
	
	event.remove({output: 'mekanism:energy_tablet'})
	event.shaped(
	  Item.of('mekanism:energy_tablet'), 
	  [
	    'MEM',
		'AEA',
		'MEM'
	  ], 
	  {
		A: 'mekanism:alloy_infused',
		E: 'assemblylinemachines:energized_gold_ingot',
		M: 'assemblylinemachines:mystium_blend'
	  }
	)
	
	
	event.remove({output: 'mekanism:digital_miner'})
	event.shaped(
	  Item.of('mekanism:digital_miner'), 
	  [
	    'UCU',
		'LRL',
		'TNT'
	  ], 
	  {
		U: 'allthemodium:unobtainium_gear',
		C: 'mekanism:ultimate_control_circuit',
		L: 'mekanism:logistical_sorter',
		R: 'mekanism:robit',
		T: 'mekanism:teleportation_core',
		N: 'powah:crystal_nitro'
	  }
	)
	
	
	event.remove({output: 'mekanism:robit'})
	event.shaped(
	  Item.of('mekanism:robit'), 
	  [
	    'WVW',
		'EAE',
		'CPC'
	  ], 
	  {
		W: 'cataclysm:witherite_ingot',
		V: 'allthemodium:vibranium_plate',
		E: 'mekanism:energy_tablet',
		A: 'mekanism:alloy_atomic',
		C: 'mekanism:ultimate_control_circuit',
		P: 'mekanism:personal_chest'
	  }
	)
	
	
	event.remove({output: 'mekanism:atomic_disassembler'})
	event.shaped(
	  Item.of('mekanism:atomic_disassembler'), 
	  [
	    'MTM',
		'VIV',
		'AOA'
	  ], 
	  {
		M: 'assemblylinemachines:mystium_plate',
		T: 'mekanism:energy_tablet',
		V: 'allthemodium:vibranium_nugget',
		I: 'alltheores:iridium_gear',
		A: 'mekanism:alloy_atomic',
		O: 'mekanism:ingot_refined_obsidian'
	  }
	)
	
	
	event.remove({output: 'mekanism:configurator'})
	event.shaped(
	  Item.of('mekanism:configurator'), 
	  [
	    ' M ',
		'AEA',
		' S '
	  ], 
	  {
		M: 'assemblylinemachines:mystium_blend',
		A: 'mekanism:alloy_infused',
		E: 'mekanism:energy_tablet',
		S: 'alltheores:signalum_rod'
	  }
	)
	
	
	event.remove({output: 'mekanism:free_runners'})
	event.shaped(
	  Item.of('mekanism:free_runners'), 
	  [
	    'TLT',
		'ANA',
		'E E'
	  ], 
	  {
		T: 'assemblylinemachines:attuned_titanium_plate',
		L: 'alltheores:lumium_plate',
		A: 'mekanism:alloy_infused',
		N: 'alltheores:enderium_gear',
		E: 'mekanism:energy_tablet'
	  }
	)
	
	
	event.remove({output: 'mekanism:osmium_compressor'})
	event.shaped(
	  Item.of('mekanism:osmium_compressor'), 
	  [
	    'ECE',
		'OSO',
		'ECE'
	  ], 
	  {
		E: 'assemblylinemachines:energized_gold_plate',
		C: 'mekanism:advanced_control_circuit',
		O: 'alltheores:osmium_gear',
		S: 'mekanism:steel_casing'
	  }
	)
	
	
	event.remove({output: 'mekanism:energized_smelter'})
	event.shaped(
	  Item.of('mekanism:energized_smelter'), 
	  [
	    'ECE',
		'BFB',
		'ECE'
	  ], 
	  {
		E: 'assemblylinemachines:energized_gold_plate',
		C: 'mekanism:basic_control_circuit',
		B: 'alltheores:brass_gear',
		F: 'assemblylinemachines:mkii_furnace'
	  }
	)
	
	
	event.remove({output: 'mekanism:crusher'})
	event.shaped(
	  Item.of('mekanism:crusher'), 
	  [
	    'ECE',
		'SGS',
		'ECE'
	  ], 
	  {
		E: 'assemblylinemachines:energized_gold_plate',
		C: 'mekanism:basic_control_circuit',
		S: 'alltheores:steel_gear',
		G: 'assemblylinemachines:mkii_grinder'
	  }
	)
	
	
	event.remove({output: 'mekanism:enrichment_chamber'})
	event.shaped(
	  Item.of('mekanism:enrichment_chamber'), 
	  [
	    'ECE',
		'ISI',
		'ECE'
	  ], 
	  {
		E: 'assemblylinemachines:energized_gold_plate',
		C: 'mekanism:basic_control_circuit',
		I: 'alltheores:invar_gear',
		S: 'mekanism:steel_casing'
	  }
	)
	
	
})