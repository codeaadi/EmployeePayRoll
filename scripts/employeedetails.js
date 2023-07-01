window.onload = function () {
  $(document).ready(function () {
    $.get("http://localhost:3000/Users", function (data) {
      for (let i of data) {
        console.log("i", i);
        let department =JSON.parse(i.department);
        let tr = `
                <tr class="emplyData">
                <td><img style="height:20px;width:20px;cursor:pointer" src="${i.img}"
                alt="">${i.name}</td>
                <td class="gen">${i.gender}</td>
                <td class=depart>${department.map((department)=>{
                    return `<span>${department}</span>`
                })}</td>
                <td class="sal">${i.Salary}</td>
                <td>${i.sd}</td>
                <td>
                    <img style="height:15px;width:15px;cursor:pointer" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png">
                    <img style="height:15px;width:15px;cursor:pointer" src="https://cdn-icons-png.flaticon.com/512/61/61456.png">
                </td>
                </tr>`;
        $(".tbody").append(tr);
      }
    });
  });
};
