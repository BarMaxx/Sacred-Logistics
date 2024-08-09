ServerEvents.recipes(event => {

	event.remove({ output: 'assemblylinemachines:empowered_conduction_component' })
	event.shaped(
		Item.of('assemblylinemachines:empowered_conduction_component'),
		[
			'CEC',
			'EAE',
			'CEC'
		],
		{
			C: 'assemblylinemachines:conduction_component',
			E: 'assemblylinemachines:energized_gold_ingot',
			A: 'cataclysm:ancient_metal_ingot'
		}
	)
	

	event.remove({ output: 'assemblylinemachines:hand_grinder' })
	event.shaped(
		Item.of('assemblylinemachines:hand_grinder'),
		[
			'AAA',
			'BCB',
			'BDB'
		],
		{
			A: 'assemblylinemachines:silt_brick',
			B: '#forge:plates/copper',
			C: '#forge:ingots/titanium',
			D: '#forge:plates/diamond'
		}
	)
	

	event.remove({ output: 'assemblylinemachines:crank_shaft' })
	event.shaped(
		Item.of('assemblylinemachines:crank_shaft'),
		[
			'BCB',
			' A ',
			'BCB'
		],
		{
			A: '#forge:ingots/steel',
			B: '#forge:rods/wooden',
			C: 'assemblylinemachines:wooden_board'
		}
	)
	
	
	event.remove({ output: 'assemblylinemachines:steel_hammer' })
	
	
	event.remove({ output: 'alltheores:steel_rod' })
	event.shaped(
		Item.of('assemblylinemachines:steel_hammer'),
		[
			' AB',
			' BA',
			'B  '
		],
		{
			A: '#forge:ingots/steel',
			B: '#forge:rods/steel',
		}
	)


	event.remove({ output: 'assemblylinemachines:simple_crank_charger' })
	event.shaped(
		Item.of('assemblylinemachines:simple_crank_charger'),
		[
			'ACA',
			'BDB',
			'AEA'
		],
		{
			A: '#forge:plates/pure_iron',
			B: '#forge:plates/diamond',
			C: '#forge:chests',
			D: 'alexsmobs:serrated_shark_tooth',
			E: 'assemblylinemachines:crank_shaft'
		}
	)


	event.remove({ output: 'assemblylinemachines:energy_pipe' })
	event.shaped(
		Item.of('8x assemblylinemachines:energy_pipe'),
		[
			'ABA',
			'CCC',
			'ABA'
		],
		{
			A: 'assemblylinemachines:item_pipe',
			B: '#forge:dusts/signalum',
			C: 'assemblylinemachines:black_granite'
		}
	)


	event.remove({output: 'assemblylinemachines:conduction_component'})
	event.shaped(
		Item.of('assemblylinemachines:conduction_component'),
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A: '#forge:plates/pure_steel',
			B: '#forge:dusts/signalum',
			C: 'assemblylinemachines:pure_steel_gear'
		}
	)
	
	
	event.remove({output: 'assemblylinemachines:purifier_upgrade_enhanced'})
	event.shaped(
		Item.of('assemblylinemachines:purifier_upgrade_enhanced'),
		[
			'EME',
			'MFM',
			'EME'
		],
		{
			F: 'assemblylinemachines:item_pipe_upgrade_filter',
			E: 'assemblylinemachines:energized_gold_plate',
			M: 'assemblylinemachines:mystium_plate'
		}
	)
	
	
})