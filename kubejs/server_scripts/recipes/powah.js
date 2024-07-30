ServerEvents.recipes(event => {


	event.remove({output: 'powah:dielectric_casing'})
	event.shaped(
	  Item.of('powah:dielectric_casing'), 
	  [
	    'MHM',
		'VAV',
		'MHM'
	  ], 
	  {
		A: 'mekanism:alloy_atomic',
		M: 'assemblylinemachines:mystium_ingot',
		H: 'powah:dielectric_rod_horizontal',
		V: 'powah:dielectric_rod'
	  }
	)
	
	
	event.remove({output: 'powah:dielectric_rod_horizontal'})
	event.shaped(
	  Item.of('4x powah:dielectric_rod_horizontal'), 
	  [
	    'PPP',
		'ICI',
		'PPP'
	  ], 
	  {
		P: 'powah:dielectric_paste',
		C: 'mekanism:enriched_carbon',
		I: 'alltheores:iridium_plate'
	  }
	)
	
	
	event.remove({output: 'powah:dielectric_rod'})
	event.shaped(
	  Item.of('4x powah:dielectric_rod'), 
	  [
	    'PIP',
		'PCP',
		'PIP'
	  ], 
	  {
		P: 'powah:dielectric_paste',
		C: 'mekanism:enriched_carbon',
		I: 'alltheores:iridium_plate'
	  }
	)
	
	
})