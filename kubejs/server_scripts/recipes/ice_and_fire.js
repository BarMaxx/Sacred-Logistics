ServerEvents.recipes(event => {


	event.remove({output: 'iceandfire:dragonforge_fire_brick'})
	event.shaped(
	  Item.of('4x iceandfire:dragonforge_fire_brick'), 
	  [
	    'DSD',
		'SMS',
		'DSD'
	  ], 
	  {
		D: '#forge:storage_blocks/scales/dragon/fire',
		S: 'assemblylinemachines:silt_brick',
		M: 'assemblylinemachines:mystium_plate'
	  }
	)
	
	
	event.remove({output: 'iceandfire:dragonforge_ice_brick'})
	event.shaped(
	  Item.of('4x iceandfire:dragonforge_ice_brick'), 
	  [
	    'DSD',
		'SMS',
		'DSD'
	  ], 
	  {
		D: '#forge:storage_blocks/scales/dragon/ice',
		S: 'assemblylinemachines:silt_brick',
		M: 'assemblylinemachines:mystium_plate'
	  }
	)
	
	
	event.remove({output: 'iceandfire:dragonforge_lightning_brick'})
	event.shaped(
	  Item.of('4x iceandfire:dragonforge_lightning_brick'), 
	  [
	    'DSD',
		'SMS',
		'DSD'
	  ], 
	  {
		D: '#forge:storage_blocks/scales/dragon/lightning',
		S: 'assemblylinemachines:silt_brick',
		M: 'assemblylinemachines:mystium_plate'
	  }
	)
	
	
	event.remove({output: 'iceandfire:dragonforge_fire_input'})
	event.shaped(
	  Item.of('iceandfire:dragonforge_fire_input'), 
	  [
	    'DSD',
		'SES',
		'DSD'
	  ], 
	  {
		D: 'iceandfire:dragonforge_fire_brick',
		S: 'assemblylinemachines:pure_steel_ingot',
		E: 'assemblylinemachines:energized_gold_plate'
	  }
	)
	
	
	event.remove({output: 'iceandfire:dragonforge_ice_input'})
	event.shaped(
	  Item.of('iceandfire:dragonforge_ice_input'), 
	  [
	    'DSD',
		'SES',
		'DSD'
	  ], 
	  {
		D: 'iceandfire:dragonforge_ice_brick',
		S: 'assemblylinemachines:pure_steel_ingot',
		E: 'assemblylinemachines:energized_gold_plate'
	  }
	)
	
	
	event.remove({output: 'iceandfire:dragonforge_lightning_input'})
	event.shaped(
	  Item.of('iceandfire:dragonforge_lightning_input'), 
	  [
	    'DSD',
		'SES',
		'DSD'
	  ], 
	  {
		D: 'iceandfire:dragonforge_lightning_brick',
		S: 'assemblylinemachines:pure_steel_ingot',
		E: 'assemblylinemachines:energized_gold_plate'
	  }
	)
	
	
	event.remove({output: 'iceandfire:dragonforge_fire_core_disabled'})
	event.shaped(
	  Item.of('iceandfire:dragonforge_fire_core_disabled'), 
	  [
	    'DMD',
		'MHM',
		'DMD'
	  ], 
	  {
		D: 'iceandfire:dragonforge_fire_brick',
		H: 'iceandfire:fire_dragon_heart',
		M: 'assemblylinemachines:mystium_plate'
	  }
	)
	
	
	event.remove({output: 'iceandfire:dragonforge_ice_core_disabled'})
	event.shaped(
	  Item.of('iceandfire:dragonforge_ice_core_disabled'), 
	  [
	    'DMD',
		'MHM',
		'DMD'
	  ], 
	  {
		D: 'iceandfire:dragonforge_ice_brick',
		H: 'iceandfire:ice_dragon_heart',
		M: 'assemblylinemachines:mystium_plate'
	  }
	)
	
	
	event.remove({output: 'iceandfire:dragonforge_lightning_core_disabled'})
	event.shaped(
	  Item.of('iceandfire:dragonforge_lightning_core_disabled'), 
	  [
	    'DMD',
		'MHM',
		'DMD'
	  ], 
	  {
		D: 'iceandfire:dragonforge_lightning_brick',
		H: 'iceandfire:lightning_dragon_heart',
		M: 'assemblylinemachines:mystium_plate'
	  }
	)
	
	
})