const assets = [
    { "id": 662500200564001, "name": "laptop", "status": 1, "image":
    "1665382383102.jpg" },
    { "id": 673000100364002, "name": "projector", "status": 0, "image": "1665566532088.jpg" },
    { "id": 744001200561020, "name": "UPS", "status": 0, "image": "1665544789222.jpg" }
    ];
let table_output = '';
let i = 0;
for (const iterator of assets) {
    table_output += `<tr id=${i}>`;
    table_output += `<td><input type="checkbox" name="" id=${iterator.id} ></td>`;
    table_output += `<td>${iterator.id}</td>`
    table_output += `<td>${iterator.name}</td>`
    if (iterator.status == 1) {
        table_output += `<td>Normal</td>`
    } else {
        table_output += `<td>Lost</td>`
    }
    table_output += `</tr>`
    // console.log(document.querySelector(`input[id="${i}"]`).id);
    i++;
}
document.querySelector('#assetlist').innerHTML = table_output;
// console.log(document.querySelector(`input`).id);

// let temps = [];
let qrcode;
const qrcheck = document.querySelectorAll('input[type="checkbox"]');
let outputlabel = document.querySelector('#qrcodeid'); 
function checkqr() {
    // console.log('id'+qrcheck.id);
    qrcheck.forEach(function(qrc) {
        for (const ast of assets) {
            if(ast.id == qrc.id && qrc.checked){
                // temps.push(ast);
                console.log('id'+qrc.id);
                qrcode = new QRCode(document.getElementById("qrcode"), {
                    text: `"${ast.id}"`,
                    width: 128,
                    height: 128,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
                outputlabel.innerHTML = ast.id;
            }
        }
        // console.log(temps);
    });
}
// var qrcode = null;
// function outputqr() {
//         // console.log(temps);
//          for (const iterator of temps) {
//             if (iterator.id != qrcheck.id) {
                
//             }
                
//          }
// }
document.querySelector('#qrcode_button').onclick = function () {
    checkqr();
    // outputqr();
    // qrcode.clear();
    // temps = [];
    // console.log(temps);
}
