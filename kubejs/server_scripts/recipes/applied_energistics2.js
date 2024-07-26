onEvent('recipes', event => {
	
	
  event.remove({output: 'appliedenergistics2:charger'})	
  event.shaped('appliedenergistics2:charger', [
    'SQS',
    'S  ',
    'SQS'
  ], {
    S: '#forge:ingots/steel',
	Q: '#appliedenergistics2:crystals/certus'
  })
  
  
  event.remove({output: 'appliedenergistics2:inscriber'})	
  event.shaped('appliedenergistics2:inscriber', [
    'SPS',
    'Q S',
    'SPS'
  ], {
    S: '#forge:ingots/steel',
	Q: '#appliedenergistics2:crystals/certus',
	P: 'minecraft:sticky_piston'
  })
  

})