class SmartFridge {
  startCooling(temp, mode, items) {
    const modes = [`eco`, `normal`, `fast-freeze`];
    if (!modes.includes(mode)) {
      console.log(
        `Invalid mode: ${mode}. Please choose from ${modes.join(", ")}.`
      );
      return;
    }
    if (temp < 2 || temp > 8) {
      console.log(
        `Invalid temperature ${temp} for cooling. Please set a temperature between 2 and 8 degrees Celsius.`
      );
      return;
    }
    if (items.length === 0) {
      console.log(`No items to cool. Please add items to the fridge.`);
      return;
    }
    this.#selectMode(mode);
    this.#scanItems(items);
    this.#activateCompressor();
    this.#setTargetTemperature(temp);
  }
  #selectMode(mode) {
    console.log(`Cooling mode is set to : ${mode}.`);
  }
  #scanItems(items) {
    console.log(`Scanning items: ${items.join(",")}`);
  }
  #setTargetTemperature(temp) {
    console.log(`The temperature is set to ${temp} degrees Celsius`);
  }
  #activateCompressor() {
    console.log(`Compressor is activated.`);
  }
}
const fridge = new SmartFridge();
fridge.startCooling(8, `normal`, [`milk`, `eggs`, `vegetables`]);
