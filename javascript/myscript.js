// function f1()
// {
//     alert('Welcome To Javascript')
//     console.log("Welcome!")
// }

// var a=100.23;
// console.log(typeof(a))

// var mstatus = true
// console.log(typeof(mstatus))

// var arr1 = [2,3,7,10, true, 30.5, "Irene"]
// console.log(typeof(arr1))
// console.log(Array.isArray(arr1))
// console.log("Length of arr1: ", arr1.length)
// console.log(arr1)

// // array follows indexing approach. index begins at 0

// console.log("Element at position 2 is ", arr1[1])

// // if the index is not available it will return undefined

// // // for loop

// // for(var i = 0;i<arr1.length;i++)
// // {
// //     console.log("Element At Index Position: ", i , " is ", arr1[i])

// // }

// // //to print the index
// // for (var i in arr1){
// //     console.log(i)
// // }

// // //to print the values
// // for (var i in arr1){
// //     console.log(arr1[i])
// // }

// // for of loop

// console.log("Processing elements of an array using for of loop")

// for (var i of arr1){
//     console.log(i)
// }

// //using built in method

// console.log("Processing elements using built in function")

// arr1.forEach(function(e){
//     console.log(e)
// })

// //everything in one line
// console.log("everything in one line")
// arr1.forEach((e)=>console.log(e))

// let arr2 = new Array(10,2,4,1)
// console.log(arr2)

// let arr3=arr2.sort((e1,e2)=>e1<e2?-1:0)
// console.log(arr3)

//to create an object in javascript

let employee = {
    'eid':1,
    'ename':'Irene',
    'ecity':'Nairobi',
    'mobile':'125833153325',
    'address':{
        'dno':514,
        'street':'Northview Road',
        'city':'Pangani',
        'pincode':525252
    }
}

// console.log(typeof(employee))
// console.log(employee)

// console.log(`Employee ID:${employee.eid}`)
// console.log(`Employee Name:${employee.ename}`)
// console.log(`Employee City:${employee.ecity}`)
// console.log(`Employee Mobile:${employee.mobile}`)
// console.log(`Employee Address:${employee.address.dno}`)

let employees = [
    {'eid': 1, 'ename':'Irene Muema', 'ecity':'Nairobi'},
    {'eid': 2, 'ename':'Jane Njiru', 'ecity':'Muranga'},
    {'eid': 3, 'ename':'Charles', 'ecity':'Busia'},
    {'eid': 4, 'ename':'Kimathi', 'ecity':'Kapsabet'},
    {'eid': 5, 'ename':'Eliud', 'ecity':'Ulaya'},
]

console.log(employees)

for(employee of employees)
{
    console.log(`Employee ID:${employee.eid}`)
    console.log(`Employee name:${employee.ename}`)
    console.log(`Employee city:${employee.ecity}`)
    console.log('**********************************')
}

