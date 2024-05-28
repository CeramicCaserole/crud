var rollV, firstnameV, lastnameV, addressV, emailV, nicknameV;

function readFom() {
  rollV = document.getElementById("roll").value;
  firstnameV = document.getElementById("firstname").value;
  lastnameV = document.getElementById("lastname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  nicknameV = document.getElementById("nickname").value;
  Swal.fire("Data Read Succesfully!");
  console.log(rollV, firstnameV, addressV, lastnameV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      firstname: firstnameV,
      lastname: lastnameV,
      address: addressV,
      email: emailV,
      nickname: nicknameV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("nickname").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("firstname").value = snap.val().firstname;
      document.getElementById("lastname").value = snap.val().lastname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
      document.getElementById("nickname").value = snap.val().nickname;
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
      lastname: lastnameV,
      address: addressV,
      email: emailV,
      nickname: nicknameV
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
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
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("nickname").value = "";
};
