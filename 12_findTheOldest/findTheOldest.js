const getYear = function(obj){
    if (!obj.yearOfDeath){
        return new Date().getFullYear() - obj.yearOfBirth;
    } else {
        return obj.yearOfDeath - obj.yearOfBirth;
    }
}

const findTheOldest = function(arr) {
    return arr.reduce((theOldest, nextPeople)=> {
        let currentOldest = getYear(theOldest)
        let nextAge = getYear(nextPeople);

        return nextAge > currentOldest? nextPeople : theOldest;
    })

    // let theOldest = arr[0];
    // for (let i=1; i<arr.length; i++){
    //     let currentOldest = getYear(theOldest)
    //     let nextPeople = getYear(arr[i])
    //     if (nextPeople > currentOldest){
    //         theOldest = arr[i];
    //         return theOldest;
    //     }
    // }

    // return theOldest;

}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]
  
console.log(findTheOldest(people).name)

// Do not edit below this line
module.exports = findTheOldest;
