var uuidV, firstnameV, midV, addressV, emailV, surnameV;

function readFom() {
  uidV = document.getElementById("uid").value;
  firstnameV = document.getElementById("firstname").value;
  midV = document.getElementById("mid").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  surnameV = document.getElementById("surname").value;
  Swal.fire("Data Read Succesfully!");
  console.log(uidV, firstnameV, addressV, midV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .set({
      idNo: uidV,
      firstname: firstnameV,
      mid: midV,
      address: addressV,
      email: emailV,
      surname: surnameV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("id").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("mid").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .on("value", function (snap) {
      document.getElementById("id").value = snap.val().idNo;
      document.getElementById("firstname").value = snap.val().firstname;
      document.getElementById("mid").value = snap.val().mid;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
      document.getElementById("surname").value = snap.val().surname;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .update({
      //   idNo: uidV,
      firstname: firstnameV,
      mid: midV,
      address: addressV,
      email: emailV,
      surname: surnameV
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("id").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("mid").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("id").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("mid").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("surname").value = "";
};
