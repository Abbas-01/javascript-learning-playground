const nestedObject = {
    prop: 'value'
  };
  
  // Freeze the nestedObject
  const frozenNestedObject = Object.freeze(nestedObject);
  
  const obj = {
    frozenProp: frozenNestedObject
  };
  
  // Attempting to modify the nested object will NOT work
  obj.frozenProp.prop = 'new value'; // This will NOT work
  
  console.log(obj.frozenProp);
  // Output: { prop: 'value' }
  