const assets = [
    { "id": 662500200564001, "name": "laptop", "status": 1, "image":
    "1665382383102.jpg" },
    { "id": 673000100364002, "name": "projector", "status": 0, "image": "1665566532088.jpg" },
    { "id": 744001200561020, "name": "UPS", "status": 0, "image": "1665544789222.jpg" }
    ];
function tableoutput() {
    const datatable = document.querySelector('tbody');
    let data = '';
    for (const iterator of assets) {
        data += `<tr class="">`;
        data +=`<td><input type="checkbox" name="" id=""></td>`;
        data +=`<td>${iterator.id}</td>`;
        data +=`<td>${iterator.name}</td>`;
        if (iterator.status == 1) {
            data +=`<td>Normal</td>`;
        } else {
            data +=`<td>Lost</td>`;
        }
        data +=`</tr>`;
    }
    datatable.innerHTML = data;
}
tableoutput();

document.querySelector('#sign_out').onclick = function () {
    window.location.replace('login.html');
}