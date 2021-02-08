//task 1
var lorem = 'Lorem ipsum dolor sit amet'

console.log(lorem.toLowerCase())

//task 2

function doesItExist(){
    if(lorem.includes('sit')){
        console.log(`This string does contain - sit`)
    }else{
        console.log('This string does not contain - sit')
    }
}
doesItExist('sit')


//task 3

console.log(lorem.length - 1)

//task 4

var prvaTri = function(str){
    var podeljeno = str.split(' ')
    console.log(podeljeno[0], podeljeno[1], podeljeno[2])
}

prvaTri(lorem)


//task 5

var peter = 'Piter is an actor.'

var theSwitch = function(str){
    var cut = str.split('')
    cut[1] = 'e'
    cut[15] = 'e'
    return    cut.join('')
}

console.log(theSwitch(peter))


//task 6

var someData = [34, 23, 14, 56, 23, 44, 65]

var result = someData.filter(function(item){
    return item !== 56
})

console.log(result)

//taskk 7

var otherData = [34, 23, 14, 56, 23, 44, 65]

var izmene = function(arr){
    var prvi = otherData.filter(function(item){
        return item !== 34
    })

    prvi[3] = 65
    prvi[5] = 23



    //mozda ovako 1

   

    
    //mozda ovako 2 

    for(let i = 0; i < prvi.length; i++){
        if(prvi[i + 1] == 23){
            prvi[i] == 65
        }else if(prvi[i] == 65)
            prvi[i] == 23
    }

    return prvi
}

console.log(izmene(otherData))


//task 8

var lastData = [334, 233, 212, 154, 122]

var reduceByPrevious = function(arr){
    var repacked = []
    for(let i = 1; i < arr.length; i++){
        repacked.push(arr[i] - arr[i - 1])        
        
    }
    return repacked
}

console.log(reduceByPrevious(lastData))


//task 9

var students = [
    {
       name: "Jim",
       avgGrade: 8.5556
    },
    {
       name: "Mike",
       avgGrade: 8.5492
    },
    {
       name: "Anna",
       avgGrade: 8.9322
    },
    {
       name: "Jack",
       avgGrade: 8.6111
    }
  ]

var averageGrade = function(arr){
    var filtered = arr.filter(item => item.avgGrade > 8.5)
    // var decimal = filtered.forEach(function(item){
    //     item.avgGrade.toFixed(2)
    // })

    //iz nekog razloga EC5 tipovi predefinisanih funkcija mi ne rade zato sam koristio ES6

    var decimal = filtered.forEach(item => item.avgGrade.toFixed(2))
    return decimal

    // ???????
}

console.log(averageGrade(students))