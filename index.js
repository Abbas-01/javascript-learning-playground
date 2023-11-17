/* 
What have we learn from this :

When we use bracket notaion to access an property if the property is not an special character or number then we have to use strings to access or modify that property. 

Example:

const person = {
    name: "Abbas",
    age : 16
}
person["name"]; Correct
person[name]; Wrong

*/

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

var collectionCopy = JSON.parse(JSON.stringify(recordCollection));
  
  function upadateCollection (id, prop, value) {
      if (value === "") {
          delete recordCollection[id][prop];
    } else if (prop === "tracks") {
        recordCollection[id][prop] = recordCollection[id][prop] || [] ;
         recordCollection[id][prop].push(value);
    } else {
        recordCollection[id][prop] = value;
    }
    return recordCollection;
}

upadateCollection(1245, "tracks", "Abbas");
upadateCollection(2468, "artist", "Ali");
console.log(recordCollection);