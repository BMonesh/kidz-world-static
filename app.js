var books = [
    {title:"This was out pact", price:7.49, quantity:0},
    {title:"To Kill a Mockingbird", price:4.59, quantity:0},
    {title:"Pride and Prejudice", price:6.80, quantity:0},
    {title:"JK Rowling",price:10, quantity:0},
    {title:"Ruskin Bond",price:7.29, quantity:0},
    {title:"Jeff Kinney",price:4.99, quantity:0},
    {title:"Dart Board",price:17.49, quantity:0},
    {title:"Connect 4",price:19.99, quantity:0},
    {title:"Jenga",price:20.99, quantity:0},
    {title:"Monopoly",price:19.49, quantity:0},
    {title:"Bookmarks",price:12.49, quantity:0},
    {title:"Birthday card",price:19.99, quantity:0},
    {title:"Stuffed toys",price:15.99, quantity:0},
    {title:"Dream catcher drawing",price:18.49, quantity:0}
]
const cart = document.getElementById("cart-value")
cart_value = 0
Total = 0


var buttns = document.getElementsByClassName("button")
for (let i = 0; i<buttns.length; i++){
    buttns[i].addEventListener("click", function(){
        books[i].quantity += 1;
        cart_value += 1;
        cart.textContent = cart_value;
        // console.log(books[i].quantity, books[i].title)
    })
}

document.getElementById("cart").addEventListener("click", function(){
    for (let j = 0; j<books.length; j++){
        if (books[j].quantity > 0){
            Total += books[j].price * books[j].quantity;
            console.log(`Item name: ${books[j].title} - quantity:  ${books[j].quantity}`)
            Total += books[j].price
        }
    }
    Total = Total.toFixed(2)
    Total = String(Total).split(".")
    console.log(`The total amount is ${Total[0]}$ and ${Total[1]}cents`)
})




//  function count_item(){
//     const counter = {};
//     ItemNames.forEach(ele => {
//         if (counter[ele]) {
//             counter[ele] += 1;
//         } else {
//             counter[ele] = 1;
//          }
//     });
//     const counter1 = {};
//     ItemPrice.forEach(ele => {
//         if (counter1[ele]) {
//             counter1[ele] += 1;
//         } else {
//             counter1[ele] = 1;
//          }
//     });
//     let k = Object.keys(counter)
//     let v = Object.values(counter)
//     for (let i=0 ; i<k.length ; i++){
//         console.log(`Item name : ${k[i]} - Quantity: ${v[i]}`)
//     }
//     let k1 = Object.keys(counter1)
//     let v1 = Object.values(counter1)
//     let total=0
//     for (let i=0; i<k1.length; i++){
//         let t= k1[i]*v[i]
//         total+=t
//     }
//     let deci = 1-(Math.ceil(total)-total)
//     console.log(`The total amount is :${Math.floor(total)}$ ${Math.ceil(deci*100)} Cents`)
//  }