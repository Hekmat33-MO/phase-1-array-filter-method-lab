// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const driverObj = [{
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function findMatching(collection, name) {
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].toLowerCase() === name.toLowerCase()) {
            arr.push(collection[i]);
        }
    }
    return arr;
}

function fuzzyMatch(collection, letter) {
    const arr = [];
    for (let i = 0; i < collection.length; i++) {
        if (
            collection[i].slice(0, 1).toLowerCase() ===
            letter.slice(0, 1).toLowerCase()
        ) {
            arr.push(collection[i]);
        }
    }
    return arr;
}

function matchName(collection, string) {
    const nameArr = [];
    collection.map((ele) => {
        if (ele.name.toLowerCase() === string.toLowerCase()) {
            nameArr.push(ele);
        }
    });
    return nameArr;
}
console.log(fuzzyMatch(drivers, "b"));
console.log(findMatching(drivers, "Bobby"));
console.log(matchName(driverObj, "Bobby"));