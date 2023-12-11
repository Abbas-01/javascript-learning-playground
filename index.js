const groupByElements = (arr, prop) => {
  return arr.reduce((acc, currVal) => {
    let key = currVal[prop];
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(currVal);
    return acc
  }, {})
}
  
  const data = [
    { userName: "Abbas", password: "aod29na0", status: "A" },
    { userName: "Tanveer", password: "a1312ca0", status: "B" },
    { userName: "Farzain", password: "adb28a0h", status: "A" },
    { userName: "Ali", password: "5623znaa2", status: "C" },
    { userName: "Asad", password: "219anghg9", status: "B" },
    { userName: "Hanzala", password: "12n9xa1a", status: "A" },
    { userName: "Asad", password: "219anghg9", status: "C" },
    { userName: "Hanzala", password: "12n9xa1a", status: "A" },
  ];
  
  console.log(groupByElements(data, "status"));
  