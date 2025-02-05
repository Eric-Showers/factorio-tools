const syncWait = ms => {
  const end = Date.now() + ms
  while (Date.now() < end) continue
}

function upcycleGears(input_gears, modules) {
  let remaining_gears = { 
    Normal: input_gears[0], 
    Uncommon: input_gears[1], 
    Rare: input_gears[2], 
    Epic: input_gears[3], 
    Legendary: input_gears[4]
  };
  let legendary_gears = remaining_gears["Legendary"];
  delete remaining_gears["Legendary"];

  let module_effects:Array<number> = [0, 0.01, 0.02, 0.025];
  let Q:number = module_effects[modules] * 4;
  const Q_IO = {
    "Normal": {"Normal":1-Q, "Uncommon":Q*0.9, "Rare":Q*0.09, "Epic":Q*0.009, "Legendary":Q*0.001},
    "Uncommon": {"Uncommon":1-Q, "Rare":Q*0.9, "Epic":Q*0.09, "Legendary":Q*0.01},
    "Rare": {"Rare":1-Q, "Epic":Q*0.9, "Legendary":Q*0.1},
    "Epic": {"Epic":1-Q, "Legendary":Q},
    "Legendary": {"Legendary": 1}
  };

  while (Object.values(remaining_gears).some((count) => count > 1)) {
    
    //Recycle gears
    let iron_plates = { Normal: 0, Uncommon: 0, Rare: 0, Epic: 0, Legendary: 0 };
    for (const [quality_in, count] of Object.entries(remaining_gears)) {
      for (const [quality_out, chance] of Object.entries(Q_IO[quality_in])) {
        iron_plates[quality_out] = chance * count * 0.25;
      }
    }

    //Rebuild gears
    let newGears = { Normal: 0, Uncommon: 0, Rare: 0, Epic: 0, Legendary: 0 };
    for (const [quality_in, count] of Object.entries(iron_plates)) {
      for (const [quality_out, chance] of Object.entries(Q_IO[quality_in])) {
        newGears[quality_out] = chance * count;
      }
    }
    legendary_gears += newGears["Legendary"];
    delete newGears["Legendary"];
    remaining_gears = newGears;
  }
  return [0,0,0,0,legendary_gears];
}

export default upcycleGears;