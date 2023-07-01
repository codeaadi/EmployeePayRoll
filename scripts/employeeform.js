$(document).ready(() => {
  $("#form").submit(function submitData(event) {
    event.preventDefault();
    console.log("calling submit function");
    let Name = $(".name").val();
    let profileImage = $("input[name='img']").val();
    let Gender1 = $("input[name='gender']").val();
    let departments = [];
    let depr = $("input[type='checkbox']:checked").each(function () {
      departments.push($(this).val());
    });
    let salary = $("#Salary").val();
    let Date = $("#date").val();
    let month = $("#Month").val();
    let year = $("#Year").val();
    let Note = $("#Notes").val();
    let enteredData = {
      name: Name,
      img: profileImage,
      gender: Gender1,
      department: JSON.stringify(departments),
      Salary: salary,
      sd: Date + "/" + month + "/" + year,
      Month: month,
      Year: year,
      Notes: Note,
    };
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/Users",
      data: enteredData,
      success: function () {
        alert("data posted succesfully");
      },
      error: function () {
        alert("error in posting");
      },
    });
    console.log(enteredData);
  });
});

