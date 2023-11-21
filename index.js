const person = {
    name: 'John',
    age: 30
  };
  
  // Freeze the 'person' object
  Object.freeze(person);
  
  // Attempting to modify the object will have no effect
  person.name = 'Jane';
  person.job = 'Developer'; // This property won't be added
  
  console.log(person); 
  // Output: { name: 'John', age: 30 }
  
  // Attempting to delete a property will have no effect
  delete person.age;
  
  console.log(person); 
  // Output: { name: 'John', age: 30 }
  