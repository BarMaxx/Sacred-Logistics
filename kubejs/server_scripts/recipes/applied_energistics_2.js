ServerEvents.recipes(event => {


	event.remove({output: 'ae2:inscriber'})
	event.shaped(
	  Item.of('ae2:inscriber'), 
	  [
	    'TPT',
		'I T',
		'TPT'
	  ], 
	  {
		P: 'minecraft:sticky_piston',
		T: 'assemblylinemachines:attuned_titanium_ingot',
		I: 'cataclysm:ignitium_ingot'
	  }
	)
	
	
	event.remove({output: 'ae2:charger'})
	event.shaped(
	  Item.of('ae2:charger'), 
	  [
	    'TIT',
		'T  ',
		'TIT'
	  ], 
	  {
		T: 'assemblylinemachines:attuned_titanium_ingot',
		I: 'cataclysm:ignitium_ingot'
	  }
	)
	
	
	event.remove({output: 'ae2:crafting_unit'})
	event.shaped(
	  Item.of('ae2:crafting_unit'), 
	  [
	    'TAT',
		'CPC',
		'TAT'
	  ], 
	  {
		T: 'assemblylinemachines:attuned_titanium_ingot',
		A: 'mekanism:advanced_control_circuit',
		C: 'ae2:fluix_glass_cable',
		P: 'ae2:calculation_processor'
	  }
	)
	
	
	event.remove({output: 'ae2:cell_component_1k'})
	event.shaped(
	  Item.of('ae2:cell_component_1k'), 
	  [
	    'ASA',
		'SPS',
		'ASA'
	  ], 
	  {
		A: 'mekanism:alloy_infused',
		S: 'assemblylinemachines:pure_steel_plate',
		P: 'ae2:logic_processor'
	  }
	)
	
	
	event.remove({output: 'ae2:cell_component_4k'})
	event.shaped(
	  Item.of('ae2:cell_component_4k'), 
	  [
	    'AMA',
		'CPC',
		'ACA'
	  ], 
	  {
		A: 'mekanism:alloy_reinforced',
		C: 'ae2:cell_component_1k',
		P: 'ae2:calculation_processor',
		M: 'assemblylinemachines:mystium_plate'
	  }
	)
	
	
	event.remove({output: 'ae2:cell_component_16k'})
	event.shaped(
	  Item.of('ae2:cell_component_16k'), 
	  [
	    'ANA',
		'CPC',
		'ACA'
	  ], 
	  {
		A: 'mekanism:alloy_atomic',
		C: 'ae2:cell_component_4k',
		P: 'ae2:calculation_processor',
		N: 'allthemodium:allthemodium_nugget'
	  }
	)
	
	
	event.remove({output: 'ae2:cell_component_64k'})
	event.shaped(
	  Item.of('ae2:cell_component_64k'), 
	  [
	    'UWU',
		'CPC',
		'UCU'
	  ], 
	  {
		U: 'mekanism:ultimate_control_circuit',
		C: 'ae2:cell_component_16k',
		P: 'ae2:calculation_processor',
		W: 'cataclysm:witherite_ingot'
	  }
	)
	
	
	event.remove({output: 'ae2:cell_component_256k'})
	event.shaped(
	  Item.of('ae2:cell_component_256k'), 
	  [
	    'ANA',
		'CPC',
		'ACA'
	  ], 
	  {
		A: 'mekanism:pellet_antimatter',
		C: 'ae2:cell_component_64k',
		P: 'ae2:calculation_processor',
		N: 'assemblylinemachines:novasteel_plate'
	  }
	)
	
	
	event.remove({output: 'ae2:cell_workbench'})
	event.shaped(
	  Item.of('ae2:cell_workbench'), 
	  [
	    'ACA',
		'TPT',
		'TTT'
	  ], 
	  {
		T: 'assemblylinemachines:attuned_titanium_ingot',
		P: 'mekanism:personal_chest',
		A: 'mekanism:advanced_control_circuit',
		C: 'ae2:calculation_processor'
	  }
	)
	
	
	event.remove({output: 'ae2:formation_core'})
	event.shaped(
	  Item.of('ae2:formation_core'), 
	  [
	    'SAS',
		'LFL',
		'SAS'
	  ], 
	  {
		S: 'assemblylinemachines:pure_steel_plate',
		A: 'mekanism:advanced_control_circuit',
		L: 'ae2:logic_processor',
		F: 'ae2:fluix_dust'
	  }
	)
	
	
	event.remove({output: 'ae2:annihilation_core'})
	event.shaped(
	  Item.of('ae2:annihilation_core'), 
	  [
	    'SRS',
		'LFL',
		'SRS'
	  ], 
	  {
		S: 'assemblylinemachines:pure_steel_plate',
		R: 'mekanism:alloy_reinforced',
		L: 'ae2:logic_processor',
		F: 'ae2:fluix_dust'
	  }
	)
	
	
	event.remove({output: 'ae2:controller'})
	event.shaped(
	  Item.of('ae2:controller'), 
	  [
	    'STS',
		'TQT',
		'STS'
	  ], 
	  {
		S: 'ae2:smooth_sky_stone_block',
		T: 'assemblylinemachines:attuned_titanium_plate',
		Q: 'kubejs:quantum_processor'
	  }
	)
	
	
	event.remove({output: 'ae2:drive'})
	event.shaped(
	  Item.of('ae2:drive'), 
	  [
	    'TQT',
		'FEF',
		'TQT'
	  ], 
	  {
		T: 'assemblylinemachines:attuned_titanium_ingot',
		Q: 'kubejs:quantum_processor',
		F: 'ae2:fluix_glass_cable',
		E: 'alltheores:enderium_gear'
	  }
	)
	
	
})