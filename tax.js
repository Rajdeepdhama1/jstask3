//array of all types and their discount %
var A = [{
    type: "transport",
    percentage: 0
},
{
    type: "medical",
    percentage: 10
},
{
    type: "shopping",
    percentage: 15
},
{
    type: "salary",
    percentage: 20
},
{
    type: "food",
    percentage: 25
},
]
//array ends

//function to calculate the deducted amount
function caltax(type = "transport", amount = 0) {
    var percent = 0;
    for (var i = 0; i < 5; i++) {
        if (type == A[i].type) {
            percent = A[i].percentage;

        }
    }
    deductedamount = amount * (percent / 100);
    var final = {
        "type": type,
        "amount": amount,
        "discount": percent,
        "deduction": deductedamount,
        "net amount": amount - deductedamount

    }
    return final;

}//function ends
console.log(caltax("salary", 200));//calling of caltax function
