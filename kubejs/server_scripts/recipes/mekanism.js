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
		I: '#forge:gears',
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
	
	
	event.remove({output: 'mekanism:teleportation_core'})
	event.shaped(
	  Item.of('mekanism:teleportation_core'), 
	  [
	    'PAP',
		'MIM',
		'PAP'
	  ], 
	  {
		P: 'assemblylinemachines:mystium_plate',
		A: 'mekanism:alloy_atomic',
		M: 'sacred_logistics:meteorite_ingot',
		I: 'cataclysm:ancient_metal_ingot'
	  }
	)
	
	
	event.remove({output: 'mekanism:mekasuit_helmet'})
	event.shaped(
	  Item.of('mekanism:mekasuit_helmet'), 
	  [
	    'HCH',
		'SAS',
		'PIP'
	  ], 
	  {
		H: 'mekanism:hdpe_sheet',
		C: 'mekanism:ultimate_control_circuit',
		S: 'ae2:singularity',
		A: 'allthemodium:allthemodium_helmet',
		P: 'mekanism:pellet_polonium',
		I: 'mekanism:ultimate_induction_cell'
	  }
	)
	
	
	event.remove({output: 'mekanism:mekasuit_bodyarmor'})
	event.shaped(
	  Item.of('mekanism:mekasuit_bodyarmor'), 
	  [
	    'HCH',
		'SAS',
		'PIP'
	  ], 
	  {
		H: 'mekanism:hdpe_sheet',
		C: 'mekanism:ultimate_control_circuit',
		S: 'ae2:singularity',
		A: 'allthemodium:allthemodium_chestplate',
		P: 'mekanism:pellet_polonium',
		I: 'mekanism:ultimate_induction_cell'
	  }
	)
	
	
	event.remove({output: 'mekanism:mekasuit_pants'})
	event.shaped(
	  Item.of('mekanism:mekasuit_pants'), 
	  [
	    'HCH',
		'SAS',
		'PIP'
	  ], 
	  {
		H: 'mekanism:hdpe_sheet',
		C: 'mekanism:ultimate_control_circuit',
		S: 'ae2:singularity',
		A: 'allthemodium:allthemodium_leggings',
		P: 'mekanism:pellet_polonium',
		I: 'mekanism:ultimate_induction_cell'
	  }
	)
	
	
	event.remove({output: 'mekanism:mekasuit_boots'})
	event.shaped(
	  Item.of('mekanism:mekasuit_boots'), 
	  [
	    'HCH',
		'SAS',
		'PIP'
	  ], 
	  {
		H: 'mekanism:hdpe_sheet',
		C: 'mekanism:ultimate_control_circuit',
		S: 'ae2:singularity',
		A: 'allthemodium:allthemodium_boots',
		P: 'mekanism:pellet_polonium',
		I: 'mekanism:ultimate_induction_cell'
	  }
	)
	
	
	event.remove({output: 'mekanism:meka_tool'})
	event.shaped(
	  Item.of('mekanism:meka_tool'), 
	  [
	    'OAX',
		'HSH',
		'PIP'
	  ], 
	  {
		H: 'mekanism:hdpe_sheet',
		A: 'allthemodium:allthemodium_axe',
		P: 'mekanism:pellet_polonium',
		I: 'mekanism:ultimate_induction_cell',
		S: 'allthemodium:allthemodium_sword',
		X: 'allthemodium:allthemodium_pickaxe',
		O: 'allthemodium:allthemodium_shovel'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_infusing_factory'})
	event.shaped(
	  Item.of('mekanism:basic_infusing_factory'), 
	  [
	    'TCT',
		'MIM',
		'TCT'
	  ], 
	  {
		I: 'mekanism:metallurgic_infuser',
		C: 'mekanism:basic_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'sacred_logistics:meteorite_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_infusing_factory'})
	event.shaped(
	  Item.of('mekanism:advanced_infusing_factory'), 
	  [
	    'TCT',
		'HIH',
		'TCT'
	  ], 
	  {
		I: 'mekanism:basic_infusing_factory',
		C: 'mekanism:advanced_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		H: 'sacred_logistics:chlorophyte_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_infusing_factory'})
	event.shaped(
	  Item.of('mekanism:elite_infusing_factory'), 
	  [
	    'TCT',
		'DIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:advanced_infusing_factory',
		C: 'mekanism:elite_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		D: 'sacred_logistics:demonite_ingot',
		B: 'sacred_logistics:crimson_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_infusing_factory'})
	event.shaped(
	  Item.of('mekanism:ultimate_infusing_factory'), 
	  [
	    'TCT',
		'BIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:elite_infusing_factory',
		C: 'mekanism:ultimate_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		B: 'sacred_logistics:cobalt_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_crushing_factory'})
	event.shaped(
	  Item.of('mekanism:basic_crushing_factory'), 
	  [
	    'TCT',
		'MIM',
		'TCT'
	  ], 
	  {
		I: 'mekanism:crusher',
		C: 'mekanism:basic_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'sacred_logistics:meteorite_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_crushing_factory'})
	event.shaped(
	  Item.of('mekanism:advanced_crushing_factory'), 
	  [
	    'TCT',
		'HIH',
		'TCT'
	  ], 
	  {
		I: 'mekanism:basic_crushing_factory',
		C: 'mekanism:advanced_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		H: 'sacred_logistics:chlorophyte_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_crushing_factory'})
	event.shaped(
	  Item.of('mekanism:elite_crushing_factory'), 
	  [
	    'TCT',
		'DIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:advanced_crushing_factory',
		C: 'mekanism:elite_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		D: 'sacred_logistics:demonite_ingot',
		B: 'sacred_logistics:crimson_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_crushing_factory'})
	event.shaped(
	  Item.of('mekanism:ultimate_crushing_factory'), 
	  [
	    'TCT',
		'BIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:elite_crushing_factory',
		C: 'mekanism:ultimate_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		B: 'sacred_logistics:cobalt_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_smelting_factory'})
	event.shaped(
	  Item.of('mekanism:basic_smelting_factory'), 
	  [
	    'TCT',
		'MIM',
		'TCT'
	  ], 
	  {
		I: 'mekanism:energized_smelter',
		C: 'mekanism:basic_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'sacred_logistics:meteorite_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_smelting_factory'})
	event.shaped(
	  Item.of('mekanism:advanced_smelting_factory'), 
	  [
	    'TCT',
		'HIH',
		'TCT'
	  ], 
	  {
		I: 'mekanism:basic_smelting_factory',
		C: 'mekanism:advanced_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		H: 'sacred_logistics:chlorophyte_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_smelting_factory'})
	event.shaped(
	  Item.of('mekanism:elite_smelting_factory'), 
	  [
	    'TCT',
		'DIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:advanced_smelting_factory',
		C: 'mekanism:elite_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		D: 'sacred_logistics:demonite_ingot',
		B: 'sacred_logistics:crimson_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_smelting_factory'})
	event.shaped(
	  Item.of('mekanism:ultimate_smelting_factory'), 
	  [
	    'TCT',
		'BIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:elite_smelting_factory',
		C: 'mekanism:ultimate_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		B: 'sacred_logistics:cobalt_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_enriching_factory'})
	event.shaped(
	  Item.of('mekanism:basic_enriching_factory'), 
	  [
	    'TCT',
		'MIM',
		'TCT'
	  ], 
	  {
		I: 'mekanism:enrichment_chamber',
		C: 'mekanism:basic_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'sacred_logistics:meteorite_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_enriching_factory'})
	event.shaped(
	  Item.of('mekanism:advanced_enriching_factory'), 
	  [
	    'TCT',
		'HIH',
		'TCT'
	  ], 
	  {
		I: 'mekanism:basic_enriching_factory',
		C: 'mekanism:advanced_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		H: 'sacred_logistics:chlorophyte_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_enriching_factory'})
	event.shaped(
	  Item.of('mekanism:elite_enriching_factory'), 
	  [
	    'TCT',
		'DIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:advanced_enriching_factory',
		C: 'mekanism:elite_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		D: 'sacred_logistics:demonite_ingot',
		B: 'sacred_logistics:crimson_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_enriching_factory'})
	event.shaped(
	  Item.of('mekanism:ultimate_enriching_factory'), 
	  [
	    'TCT',
		'BIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:elite_enriching_factory',
		C: 'mekanism:ultimate_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		B: 'sacred_logistics:cobalt_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_compressing_factory'})
	event.shaped(
	  Item.of('mekanism:basic_compressing_factory'), 
	  [
	    'TCT',
		'MIM',
		'TCT'
	  ], 
	  {
		I: 'mekanism:osmium_compressor',
		C: 'mekanism:basic_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'sacred_logistics:meteorite_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_compressing_factory'})
	event.shaped(
	  Item.of('mekanism:advanced_compressing_factory'), 
	  [
	    'TCT',
		'HIH',
		'TCT'
	  ], 
	  {
		I: 'mekanism:basic_compressing_factory',
		C: 'mekanism:advanced_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		H: 'sacred_logistics:chlorophyte_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_compressing_factory'})
	event.shaped(
	  Item.of('mekanism:elite_compressing_factory'), 
	  [
	    'TCT',
		'DIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:advanced_compressing_factory',
		C: 'mekanism:elite_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		D: 'sacred_logistics:demonite_ingot',
		B: 'sacred_logistics:crimson_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_compressing_factory'})
	event.shaped(
	  Item.of('mekanism:ultimate_compressing_factory'), 
	  [
	    'TCT',
		'BIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:elite_compressing_factory',
		C: 'mekanism:ultimate_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		B: 'sacred_logistics:cobalt_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_purifying_factory'})
	event.shaped(
	  Item.of('mekanism:basic_purifying_factory'), 
	  [
	    'TCT',
		'MIM',
		'TCT'
	  ], 
	  {
		I: 'mekanism:purification_chamber',
		C: 'mekanism:basic_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'sacred_logistics:meteorite_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_purifying_factory'})
	event.shaped(
	  Item.of('mekanism:advanced_purifying_factory'), 
	  [
	    'TCT',
		'HIH',
		'TCT'
	  ], 
	  {
		I: 'mekanism:basic_purifying_factory',
		C: 'mekanism:advanced_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		H: 'sacred_logistics:chlorophyte_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_purifying_factory'})
	event.shaped(
	  Item.of('mekanism:elite_purifying_factory'), 
	  [
	    'TCT',
		'DIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:advanced_purifying_factory',
		C: 'mekanism:elite_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		D: 'sacred_logistics:demonite_ingot',
		B: 'sacred_logistics:crimson_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_purifying_factory'})
	event.shaped(
	  Item.of('mekanism:ultimate_purifying_factory'), 
	  [
	    'TCT',
		'BIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:elite_purifying_factory',
		C: 'mekanism:ultimate_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		B: 'sacred_logistics:cobalt_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_injecting_factory'})
	event.shaped(
	  Item.of('mekanism:basic_injecting_factory'), 
	  [
	    'TCT',
		'MIM',
		'TCT'
	  ], 
	  {
		I: 'mekanism:chemical_injection_chamber',
		C: 'mekanism:basic_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'sacred_logistics:meteorite_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_injecting_factory'})
	event.shaped(
	  Item.of('mekanism:advanced_injecting_factory'), 
	  [
	    'TCT',
		'HIH',
		'TCT'
	  ], 
	  {
		I: 'mekanism:basic_injecting_factory',
		C: 'mekanism:advanced_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		H: 'sacred_logistics:chlorophyte_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_injecting_factory'})
	event.shaped(
	  Item.of('mekanism:elite_injecting_factory'), 
	  [
	    'TCT',
		'DIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:advanced_injecting_factory',
		C: 'mekanism:elite_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		D: 'sacred_logistics:demonite_ingot',
		B: 'sacred_logistics:crimson_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_injecting_factory'})
	event.shaped(
	  Item.of('mekanism:ultimate_injecting_factory'), 
	  [
	    'TCT',
		'BIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:elite_injecting_factory',
		C: 'mekanism:ultimate_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		B: 'sacred_logistics:cobalt_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_combining_factory'})
	event.shaped(
	  Item.of('mekanism:basic_combining_factory'), 
	  [
	    'TCT',
		'MIM',
		'TCT'
	  ], 
	  {
		I: 'mekanism:combiner',
		C: 'mekanism:basic_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'sacred_logistics:meteorite_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_combining_factory'})
	event.shaped(
	  Item.of('mekanism:advanced_combining_factory'), 
	  [
	    'TCT',
		'HIH',
		'TCT'
	  ], 
	  {
		I: 'mekanism:basic_combining_factory',
		C: 'mekanism:advanced_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		H: 'sacred_logistics:chlorophyte_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_combining_factory'})
	event.shaped(
	  Item.of('mekanism:elite_combining_factory'), 
	  [
	    'TCT',
		'DIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:advanced_combining_factory',
		C: 'mekanism:elite_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		D: 'sacred_logistics:demonite_ingot',
		B: 'sacred_logistics:crimson_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_combining_factory'})
	event.shaped(
	  Item.of('mekanism:ultimate_combining_factory'), 
	  [
	    'TCT',
		'BIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:elite_combining_factory',
		C: 'mekanism:ultimate_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		B: 'sacred_logistics:cobalt_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:basic_sawing_factory'})
	event.shaped(
	  Item.of('mekanism:basic_sawing_factory'), 
	  [
	    'TCT',
		'MIM',
		'TCT'
	  ], 
	  {
		I: 'mekanism:precision_sawmill',
		C: 'mekanism:basic_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		M: 'sacred_logistics:meteorite_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:advanced_sawing_factory'})
	event.shaped(
	  Item.of('mekanism:advanced_sawing_factory'), 
	  [
	    'TCT',
		'HIH',
		'TCT'
	  ], 
	  {
		I: 'mekanism:basic_sawing_factory',
		C: 'mekanism:advanced_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		H: 'sacred_logistics:chlorophyte_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:elite_sawing_factory'})
	event.shaped(
	  Item.of('mekanism:elite_sawing_factory'), 
	  [
	    'TCT',
		'DIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:advanced_sawing_factory',
		C: 'mekanism:elite_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		D: 'sacred_logistics:demonite_ingot',
		B: 'sacred_logistics:crimson_ingot'
		
	  }
	)
	
	
	event.remove({output: 'mekanism:ultimate_sawing_factory'})
	event.shaped(
	  Item.of('mekanism:ultimate_sawing_factory'), 
	  [
	    'TCT',
		'BIB',
		'TCT'
	  ], 
	  {
		I: 'mekanism:elite_sawing_factory',
		C: 'mekanism:ultimate_control_circuit',
		T: 'assemblylinemachines:attuned_titanium_plate',
		B: 'sacred_logistics:cobalt_ingot'
		
	  }
	)
	
	
})