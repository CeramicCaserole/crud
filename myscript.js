var rollV, firstnameV, middlenameV, addressV, emailV, nicknameV;

function readFom() {
  rollV = document.getElementById("roll").value;
  firstnameV = document.getElementById("firstname").value;
  middlenameV = document.getElementById("middlename").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  nicknameV = document.getElementById("nickname").value;
  Swal.fire("Data Read Succesfully!");
  console.log(rollV, firstnameV, addressV, middlenameV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      firstname: firstnameV,
      middlename: middlenameV,
      address: addressV,
      email: emailV,
      nickname: nicknameV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
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
      document.getElementById("middlename").value = snap.val().middlename;
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
      middlename: middlenameV,
      address: addressV,
      email: emailV,
      nickname: nicknameV
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
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
  document.getElementById("middlename").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("nickname").value = "";
};
