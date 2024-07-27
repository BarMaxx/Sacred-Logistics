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
	
	
})