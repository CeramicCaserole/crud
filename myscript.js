var rollV, firstnameV, lastnameV, addressV, emailV;

function readFom() {
  rollV = document.getElementById("roll").value;
  firstnameV = document.getElementById("firstname").value;
  lastnameV = document.getElementById("lastname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  Swal.fire("Data Read Succesfully!");
  console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      email: emailV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("firstname").value = snap.val().name;
      document.getElementById("lastname").value = snap.val().gender;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
      email: emailV
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
