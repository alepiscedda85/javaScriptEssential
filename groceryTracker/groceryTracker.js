let first_product;
let second_product;
let third_product;

function calculateTotal () {

    first_product = parseFloat(document.getElementById('first_product').value);
    second_product = parseFloat(document.getElementById('second_product').value);
    third_product = parseFloat(document.getElementById('third_product').value);
    let total = first_product + second_product + third_product ;

    document.getElementById('result').innerText = `The total amount for the grocery costs is: ${total}`;

}