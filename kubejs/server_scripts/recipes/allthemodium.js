ServerEvents.recipes(event => {
	
	
	event.remove({output: 'allthemodium:allthemodium_sword'})
	event.shaped(
	  Item.of('allthemodium:allthemodium_sword'), 
	  [
	    'NPN',
		'NPN',
		' R '
	  ], 
	  {
		P: 'allthemodium:allthemodium_plate',
		R: 'allthemodium:allthemodium_rod',
		N: 'assemblylinemachines:novasteel_plate'
	  }
	)


	event.remove({output: 'allthemodium:allthemodium_pickaxe'})
	event.shaped(
	  Item.of('allthemodium:allthemodium_pickaxe'), 
	  [
	    'PRP',
		'NRN',
		' R '
	  ], 
	  {
		P: 'allthemodium:allthemodium_plate',
		R: 'allthemodium:allthemodium_rod',
		N: 'assemblylinemachines:novasteel_plate'
	  }
	)
	
	
	event.remove({output: 'allthemodium:allthemodium_axe'})
	event.shaped(
	  Item.of('allthemodium:allthemodium_axe'), 
	  [
	    'PPN',
		'PRN',
		' R '
	  ], 
	  {
		P: 'allthemodium:allthemodium_plate',
		R: 'allthemodium:allthemodium_rod',
		N: 'assemblylinemachines:novasteel_plate'
	  }
	)
	
	
	event.remove({output: 'allthemodium:allthemodium_shovel'})
	event.shaped(
	  Item.of('allthemodium:allthemodium_shovel'), 
	  [
	    'NPN',
		'NRN',
		' R '
	  ], 
	  {
		P: 'allthemodium:allthemodium_plate',
		R: 'allthemodium:allthemodium_rod',
		N: 'assemblylinemachines:novasteel_plate'
	  }
	)
	
	
	event.remove({output: 'allthemodium:allthemodium_hoe'})
	event.shaped(
	  Item.of('allthemodium:allthemodium_hoe'), 
	  [
	    'PPN',
		'NRN',
		' R '
	  ], 
	  {
		P: 'allthemodium:allthemodium_plate',
		R: 'allthemodium:allthemodium_rod',
		N: 'assemblylinemachines:novasteel_plate'
	  }
	)
	
	
	event.remove({output: 'allthemodium:allthemodium_helmet'})
	event.shaped(
	  Item.of('allthemodium:allthemodium_helmet'), 
	  [
	    '   ',
		'NAN',
		'AHA'
	  ], 
	  {
		A: 'allthemodium:allthemodium_ingot',
		N: 'assemblylinemachines:novasteel_ingot',
		H: 'minecraft:netherite_helmet'
	  }
	)
	
	
	event.remove({output: 'allthemodium:allthemodium_chestplate'})
	event.shaped(
	  Item.of('allthemodium:allthemodium_chestplate'), 
	  [
	    'ACA',
		'NAN',
		'ANA'
	  ], 
	  {
		A: 'allthemodium:allthemodium_ingot',
		N: 'assemblylinemachines:novasteel_ingot',
		C: 'minecraft:netherite_chestplate'
	  }
	)
	
	
	event.remove({output: 'allthemodium:allthemodium_leggings'})
	event.shaped(
	  Item.of('allthemodium:allthemodium_leggings'), 
	  [
	    'ANA',
		'NLN',
		'A A'
	  ], 
	  {
		A: 'allthemodium:allthemodium_ingot',
		N: 'assemblylinemachines:novasteel_ingot',
		L: 'minecraft:netherite_leggings'
	  }
	)
	
	
	event.remove({output: 'allthemodium:allthemodium_boots'})
	event.shaped(
	  Item.of('allthemodium:allthemodium_boots'), 
	  [
	    '   ',
		'N N',
		'ABA'
	  ], 
	  {
		A: 'allthemodium:allthemodium_ingot',
		N: 'assemblylinemachines:novasteel_ingot',
		B: 'minecraft:netherite_boots'
	  }
	)
	
	
})