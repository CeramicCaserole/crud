var rollV, firstnameV, midnameV, addressV, emailV, surnameV;

function readFom() {
  rollV = document.getElementById("roll").value;
  firstnameV = document.getElementById("firstname").value;
  midnameV = document.getElementById("midname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  surnameV = document.getElementById("surname").value;
  Swal.fire("Data Read Succesfully!");
  console.log(rollV, firstnameV, addressV, midnameV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      firstname: firstnameV,
      midname: midnameV,
      address: addressV,
      email: emailV,
      surname: surnameV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("midname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("firstname").value = snap.val().firstname;
      document.getElementById("midname").value = snap.val().midname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
      document.getElementById("surname").value = snap.val().surname;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      firstname: firstnameV,
      midname: midnameV,
      address: addressV,
      email: emailV,
      surname: surnameV
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("midname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
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
  document.getElementById("midname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
};
