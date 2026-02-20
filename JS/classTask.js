const exampleObject = {
  // Primitive types
  stringProp: "Hello World",
  numberProp: 42,
  booleanProp: true,
  undefinedProp: undefined,
  nullProp: null,
  bigintProp: 12345678901234567890n,
  symbolProp: Symbol("unique"),

  // Non-primitive types
  objectProp: {
    key: "value"
  },
  arrayProp: [1, 2, 3],
  functionProp: function () {
    return "I am a function";
  },
  dateProp: new Date(),
  regexProp: /abc/,
  mapProp: new Map([["a", 1]]),
  setProp: new Set([1, 2, 3])
};

console.log(exampleObject);