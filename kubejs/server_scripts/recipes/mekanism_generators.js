ServerEvents.recipes(event => {


	event.remove({output: 'mekanismgenerators:solar_panel'})
	event.shaped(
	  Item.of('mekanismgenerators:solar_panel'), 
	  [
	    'PPP',
		'RAR',
		'OOO'
	  ], 
	  {
		P: 'kubejs:photocell',
		R: 'minecraft:redstone',
		A: 'mekanism:alloy_infused',
		O: 'mekanism:ingot_osmium'
	  }
	)
	
	
	event.remove({output: 'mekanismgenerators:wind_generator'})
	event.shaped(
	  Item.of('mekanismgenerators:wind_generator'), 
	  [
	    'OAO',
		'ACA',
		'EBE'
	  ], 
	  {
		O: 'mekanism:ingot_osmium',
		A: '#forge:plates/aluminum',
		C: 'alltheores:constantan_gear',
		E: 'mekanism:energy_tablet',
		B: 'mekanism:basic_control_circuit'
	  }
	)
	
	
})