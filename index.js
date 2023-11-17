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