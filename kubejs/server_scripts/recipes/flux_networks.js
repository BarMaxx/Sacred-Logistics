ServerEvents.recipes(event => {


	event.remove({output: 'fluxnetworks:flux_core'})
	event.shaped(
	  Item.of('4x fluxnetworks:flux_core'), 
	  [
	    'FOF',
		'OEO',
		'FOF'
	  ], 
	  {
		F: 'fluxnetworks:flux_dust',
		O: '#chipped:obsidian',
		E: 'powah:ender_core'
	  }
	)
	
	
})