onEvent('recipes', event => {
	
	
  event.remove({output: 'industrialforegoing:machine_frame_pity'})	
  event.shaped('4x industrialforegoing:machine_frame_pity', [
    'LSL',
    'SPS',
    'LSL'
  ], {
    L: '#minecraft:logs',
	S: '#forge:ingots/steel',
	P: 'pneumaticcraft:plastic'
  })
  

})