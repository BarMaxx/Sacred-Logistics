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
	
	
})