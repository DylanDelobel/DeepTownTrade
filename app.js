// ===========
//  Global Array
// ===========

let items = [
  [276077, 'Electrical Engine'],
  [132245, 'Magnet'],
  [121101, 'Bomb'],
  [91139, 'Oxygen Cylinder'],
  [80268, 'Helium 3'],

  [38169, 'Dry Ice'],
  [35177, 'Compressor'],
  [32922, 'Solar Panel'],
  [31561, 'LCD Monitor'],
  [25779, 'Liquid Nitrogen'],
  [25366, 'Optic Fiber'],
  [22867, 'Plastic Plate'],
  [20269, 'Gas Cylinder'],
  [14904, 'Refined Oil'],
  [14715, 'Solid Propellant'],
  [12191, 'Magnetite Ore'],
  [11160, 'Gunpowder'],

  [9763, 'Titanium Bar'],
  [9458, 'Diethyl Ether'],
  [8040, 'Motherboard'],
  [7913, 'Gear'],
  [3812, 'Ethanol'],
  [3090, 'Rubber'],
  [2826, 'Accumulator'],
  [2814, 'Sulfuric Acid'],
  [2442, 'Mirror Laser'],
  [2043, 'Diamond Cutter'],
  [1770, 'Liana'],
  [1710, 'Grape'],
  [1584, 'Sapphire Crystal Glass'],
  [1404, 'Oxygen'],
  [1318, 'Wood'],
  [1167, 'Circuits'],

  [939, 'Hydrogen'],
  [864, 'Clean Water'],
  [852, 'Steel Plate'],
  [613, 'Green Laser'],
  [501, 'Lamp'],
  [422, 'Insulated Wire'],
  [324, 'Lab Flask'],
  [261, 'Mirror'],
  [190, 'Battery'],
  [183, 'Aluminium Tank'],
  [177, 'Glass'],
  [132, 'Polished Diamond'],
  [117, 'Gold Bar'],
  [102, 'Silver Bar'],

  [91, 'Steel Bar'],
  [83, 'Amber Insulation'],
  [69, 'Polished Emerald'],
  [48, 'Aluminium Bottle'],
  [26, 'Aluminium Bar'],
  [23, 'Iron Bar'],
  [16, 'Wire'],
  [15, 'Copper bar'],
  [11, 'Copper Nail'],
  [8, 'Graphite'],
  [5, 'Amber Charger'],

];

// ===========
//  Functions
// ===========

function UpdateUnitMenu(items, propMenu) {
  let index = 0;
  for (var element in items) {
    console.log(items[0][1]);
    var opt = document.createElement("option");
    opt.value = items[index][0];
    opt.innerHTML = items[index][1];

     // then append it to the select element
     propMenu.appendChild(opt);
     index++;
  }
}

function CalculateUnit(sourceForm, targetForm) {
  // A simple wrapper function to validate input before making the conversion
  var sourceValue = sourceForm.unit_input.value;

  // First check if the user has given numbers or anything that can be made to one...
  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    ConvertFromTo(sourceForm, targetForm);
  }
}

function ConvertFromTo(sourceForm, targetForm) {
  // Converts the contents of the sourceForm input box to the units specified in the targetForm unit menu and puts the result in the targetForm input box.In other words, this is the heart of the whole script...
  let result;
  let sourceQuantity;
  let sourceValue;
  let targetValue;

  // Pickup the values selected
  sourceQuantity = parseInt(sourceForm.unit_input.value);
  sourceValue = parseInt(sourceForm.unit_menu.value);
  targetValue = parseInt(targetForm.unit_menu.value);

  result = (sourceQuantity*sourceValue)/targetValue;
  
  // Ta-da! All that's left is to update the target input box:
  targetForm.unit_input.value = Math.round((result + Number.EPSILON) * 100) / 100;
}

// This fragment initializes the property dropdown menu using the data defined above in the 'Data Definitions' section
window.onload = function(e) {
  UpdateUnitMenu(items, document.form_A.unit_menu);
  UpdateUnitMenu(items, document.form_B.unit_menu);
};