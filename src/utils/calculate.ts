// Example calculate.ts (placeholder logic)
function calculateResults(recyclers, modules, prod_bonus) {
  //n recyclers * 2.5 scrap/s * item chance/scrap * prod bonus * sec/min
  let rate_modifiers:number = recyclers * 2.5 * (1 + prod_bonus/100) * 60;
  if (modules != 0){
    rate_modifiers = rate_modifiers * 0.8;
  }
  let module_effects:Array<number> = [0, 0.01, 0.02, 0.025];
  let Q:number = module_effects[modules] * 4;
  let Q_table:Array<number> = [1-Q, Q*0.9, Q*0.09, Q*0.009, Q*0.001];

  const ITEMS = {
    "Iron gear": 0.2,
    "Solid fuel": 0.07,
    "Concrete": 0.06,
    "Ice": 0.05,
    "Steel plate": 0.04,
    "Battery": 0.04,
    "Stone": 0.04,
    "Advanced circuit": 0.03,
    "Copper wire": 0.03,
    "Processing unit": 0.02,
    "Low density structure": 0.01,
    "Holmium ore": 0.01
  }

  let results = {};
  for (const key of Object.keys(ITEMS)) {
    let base_chance:number = ITEMS[key];
    results[key] = Q_table.map((chance) =>
      Math.round(base_chance * rate_modifiers * chance)
    );
  }
  return results;
}
  
export default calculateResults;