class PocketScriptExecutor {
  constructor (code, options) {
    this.code = code;
    this.options = {
      executionTime: 100, // Max time to execute in ms
      ...options
    }
    this.memory = {};
  }
  execute () { // Executes the string code and returns program output
    // Parse the string into 2d array. Array of each line, array of each element in line.
    // Go through each line, process the elements
    let elements = this.#parseCode()
    
    elements.forEach((element) => {
      let firstWord = element[0];
      switch (firstWord) {
        case "let":
          // TODO: validate variable name, validate variable value, validate equal sign
          this.memory[element[1]] = element[3];
          break;
      }
    })
    console.log(this.memory)
  }
  #parseCode () { // Parses the string code and returns each element in array of line
    // Parse code will only transform the code into elements to the best of its ability, and not throw error for syntax
    let lines = this.code.split("\n");
    let elements = lines.map((line) => line.split(" "))
    return elements;
  }
}

let h = new PocketScriptExecutor("let i = 10\nlet x = 5", {executionTime: 10})
h.execute()