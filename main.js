function person(people) {
    var str = ''
    for (var i = 0; i < people.length; i++) {
        if (people[i].name.middle !== undefined) {
            str = str + people[i].name.first + ' ' + people[i].name.middle + " " + people[i].name.last + "\n"
        }
        str = str + people[i].name.first + " " + people[i].name.last + "\n"
    }
    return str
}

var object = {
    a: 1, b: 2, c: 3
}
// if the key is a string
function selected(object, key) {
    if (object[key] !== undefined) {

        var obj = {
            [key]: obj[key]
        }

    } else {
        alert("make sure that key is exist")
    }

    return obj
}
var obj = {
    a: 1, b: 2, c: 3
}
//obj["a"] ==> 1
// if the key is array of keys //["a"] ==> {a:1} // result{a:1}
function select(obj, arrKeys) {
    var result = {};
    for (var i = 0; i < arrKeys.length; i++) {
        result[arrKeys[i]] = obj[arrKeys[i]];
    }
    return result;
}

function makeBook(title, author, genre, date, avg) {
    return {
        title: title,
        author: author,
        genre: genre,
        date: date,
        avg: avg
    }
}

var Book1 = makeBook("hamza", "3lemat", "Action", 2007, 15)
var Book2 = makeBook("nudes", "3lemat", "Darama", 2018, 12)
var Book3 = makeBook("hamza", "hamzawi", "comedy", 2019, 19)
var allBooks = [Book1, Book2]

function Display(book) {
    return book.title + " " + book.author + ' ' + book.genre + " " + book.date + ' ' + book.avg
}
function displayAllBooks(allBooks) {
    var displayBook = '';
    for (var i = 0; i < allBooks.length; i++) {
        displayBook = displayBook + i + ". " + Display(allBooks[i]) + "\n"
    }
    return displayBook
}

function newAvg(book, newAvg) {
    return book.avg = newAvg
}

function addBook(allBooks, book) {
    allBooks.push(book)
}

function removeBook(allBooks, bookName) {
    for (var i = 0; i < allBooks.length; i++) {
        if (allBooks[i].title === bookName) {
            allBooks.splice(i, 1)
            return "book has been removed " + bookName
        }
    }
    return "this book does not exist " + bookName
}



// each

function each(coll, callback) { //for loob

    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            callback(coll[i], i)
        }
    } else {
        for (var key in coll) {
            callback(coll[key], key)
        }
    }

}


// [function map(array, f) {
//     var acc = [];
//     each(array, function (element, i) {
//         acc.push(f(element, i));
//     });
//     return acc;
// }]

function hamza(array) {
    //[1,2,3,4,5] => [2,4,6,8,10]
    return map(array, function (element, index) {
        return element + element
    })
}
function map(coll, callback) {
    /// array // obj acc = [], obj acc = {}
    var acc = []
    if (!Array.isArray(coll)) {
        acc = {}
    }

    each(coll, function (element, key) {
        acc[key] = callback(element, key)
    })
    return acc
}

function filter(array, predicate) {
    var acc = []
    each(array, function (element, i) {
        if (predicate(element)) {
            acc.push(element)
        }
    })
    return acc
}


// Using our updated version of each, write the following functions: values: accepts an object as a parameter,
// and outputs an array of the object's values. keys: accepts an object as a parameter, 
// and outputs an array of the object's keys.
var usersData = [
    { user: { email: 'majd@rbk.org', password: '_Majd(2017)' } },
    { user: { email: 'fatema@rbk.org', password: '12345' } },
    { user: { email: 'maher@rbk.org', password: 'M@her2017' } },
    { user: { email: 'sahar@rbk.org', password: 'saher2017' } }
];
function check(array) {
    //[1,2,3,4,5,6,7,8]
    return filter(array, function (element) {
        return element.user.password.length > 8
    })
}

function odd(array) {
    return filter(array, function (element) {
        return element % 2 !== 0
    })
}

function values(obj) {
    var array = []
    each(obj, function (value, key) {
        array.push(value)
    })
    return array
}

function keys(obj) {
    var array = []
    each(obj, function (value, key) {
        array.push(key)
    })
    return array;
}
//3.Write a function called countNestedKeys that, given an object where all values are also objects,
// returns an object that contains the count of keys in each nested object, e.g.
function countNestedKeys(obj) {

    return map(obj, function (value, key) {
        return Object.keys(value).length
    })
}