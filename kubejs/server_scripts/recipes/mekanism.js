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
	
	
})