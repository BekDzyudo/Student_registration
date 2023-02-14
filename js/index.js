function regis() {
  let array = [];
  let ID = document.getElementById("ID").value;
  let fio = document.getElementById("fio").value;
  let baho = document.getElementById("baho").value;
  let fakultet = document.getElementById("fakultet").value;
  let yunalish = document.getElementById("yunalish").value;
  let tbody = document.getElementById("tbody");
  let modal = document.getElementById("modal");

  if ((ID, fio, baho, fakultet, yunalish != "")) {
    array.push({
      id: ID,
      name: fio,
      ball: baho,
      fakultet: fakultet,
      yunalish: yunalish,
    });
  } else {
    modal.style.display = "block";
  }

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    tbody.innerHTML += `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.ball}</td>
        <td>${element.fakultet}</td>
        <td>${element.yunalish}</td>
    </tr>`;
  }
}

function CLOSE() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}
