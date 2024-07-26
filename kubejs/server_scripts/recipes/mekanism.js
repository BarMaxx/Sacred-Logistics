onEvent('recipes', event => {
	
	
  event.remove({output: 'mekanism:free_runners'})	
  event.shaped('mekanism:free_runners', [
    'ABA',
    'R R',
    'T T'
  ], {
    A: 'mekanism:advanced_control_circuit',
	B: 'pneumaticcraft:printed_circuit_board',
	R: 'mekanism:alloy_reinforced',
	T: 'mekanism:energy_tablet'
  })
  
  
  event.remove({output: 'mekanism:metallurgic_infuser'})	
  event.shaped('mekanism:metallurgic_infuser', [
    'SFS',
    'BOB',
    'SFS'
  ], {
    F: 'minecraft:furnace',
	S: '#forge:ingots/steel',
	B: 'pneumaticcraft:advanced_pcb',
	O: 'mekanism:ingot_osmium'
  })
  

})