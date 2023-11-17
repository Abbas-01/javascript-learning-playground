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

function updateCollection(id, prop, value) {

  if (value === "") {
    delete recordCollection[id][prop];
  } else if (prop === "tracks") {
    recordCollection[id][prop] = recordCollection[id][prop] || [];
    recordCollection[id][prop].push(value);
  } else {
    recordCollection[id][prop] = value;
  }
  return recordCollection;
}

updateCollection(1245, "artist", "Abbas");
updateCollection(5439, "tracks", "Wanna believe");
updateCollection(2548, "albumTitle", "Apples");
console.log(recordCollection);
