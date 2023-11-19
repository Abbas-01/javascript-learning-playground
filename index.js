const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

//   Looking Up using loops : Simple and Good!
function helo2(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop];
        } 
    }
}
console.log(helo("Sherlock", "likes"));

//   Looking Up without using loops : Code repeating Bad! 

  function helo(name, prop) {
    if (contacts[0].firstName === name) {
        return contacts[0][prop]
    } else if (contacts[1].firstName === name) {
        return contacts[1][prop]
    } else if (contacts[2].firstName === name) {
        return contacts[2][prop]
    } else if (contacts[3].firstName === name) {
        return contacts[3][prop]
    } 
  }
  console.log(helo("Kristian", "likes"));


  