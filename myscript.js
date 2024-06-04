var idV, firstnameV, midnameV, addressV, emailV, surnameV;

function readFom() {
  idV = document.getElementById("id").value;
  firstnameV = document.getElementById("firstname").value;
  midnameV = document.getElementById("midname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  surnameV = document.getElementById("surname").value;
  Swal.fire("Data Read Succesfully!");
  console.log(idV, firstnameV, addressV, midnameV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + idV)
    .set({
      idNo: idV,
      firstname: firstnameV,
      midname: midnameV,
      address: addressV,
      email: emailV,
      surname: surnameV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("id").value = "";
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
    .ref("student/" + idV)
    .on("value", function (snap) {
      document.getElementById("id").value = snap.val().idNo;
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
    .ref("student/" + idV)
    .update({
      //   idNo: idV,
      firstname: firstnameV,
      midname: midnameV,
      address: addressV,
      email: emailV,
      surname: surnameV
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("id").value = "";
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
    .ref("student/" + idV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("id").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("midname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
};
