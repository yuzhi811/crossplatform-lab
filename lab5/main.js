const cNameError = document.getElementById("cNameError");
const cAgeError = document.getElementById("cAgeError");
const timeArrive = document.querySelector(".arrive");
const timeLeave = document.querySelector(".leave");
// const boxChecked = document.querySelectorAll(".boxChecked");
const boxCheckedMon = document.querySelector(".boxCheckedMon");
const boxCheckedTue = document.querySelector(".boxCheckedTue");
const boxCheckedWed = document.querySelector(".boxCheckedWed");
const boxCheckedThu = document.querySelector(".boxCheckedThu");
const boxCheckedFri = document.querySelector(".boxCheckedFri");
const checkboxError = document.getElementById("checkboxError");
const describe = document.querySelector(".describe");
const describeText = document.querySelector(".describeText");
const specialDiet = document.querySelector(".special");
const territorialTitle = document.querySelector(".territorialTitle");
const describelabel = document.querySelector(".describelabel");
const territorialText = document.querySelector("#territorialText");

// const  = document.querySelector("");
// const  = document.querySelector("");

//Validate function
function validateForm(e) {
  e.preventDefault();
  var valid = true;
  //• Name of Cat is a required text field.
  if (form.catName.value == "") {
    document.getElementById("cNameError").textContent =
      "*Please enter a cat name";
    valid = false;
  }
  //• Age of Cat should be a number.
  if (isNaN(form.catAge.value) || form.catAge.value == "") {
    console.log(form.catAge.value);
    document.getElementById("cAgeError").textContent =
      "*Please enter a number as a cat age ";
    valid = false;
  }

  //check box
  // for (let i = 0; i < boxChecked.length; i++) {
  //   console.log(boxChecked[i].checked);
  //   if (!boxChecked[i].checked) {
  //     return;
  //   } else {
  //     document.getElementById("checkboxError").textContent =
  //       "*Please check at least one day ";
  //     valid = false;
  //   }
  // }
  console.log(boxCheckedMon.checked);
  switch (true) {
    //false면 pass, true면 즉시 종료(break)
    case boxCheckedMon.checked:
    case boxCheckedTue.checked:
    case boxCheckedWed.checked:
    case boxCheckedThu.checked:
    case boxCheckedFri.checked:
      console.log("it is checked at lease one");
      valid = true;
      break;
    default:
      document.getElementById("checkboxError").textContent =
        "*Please check at least one day ";
      valid = false;
  }
  //radio checked
  switch (true) {
    //false면 pass, true면 즉시 종료(break)
    case friendly.checked:
    case sleepy.checked:
    case independent.checked:
    case territorialTitle.checked:
      console.log("it is checked at lease one");
      valid = true;
      break;
    default:
      document.getElementById("temperamentTextError").textContent =
        "*Please check at least one item ";
      valid = false;
  }

  // special diet선택 시 empty인지 validate
  if (!describe.classList.contains("hidden")) {
    if (form.describeText.value == "") {
      document.getElementById("describeTextError").textContent =
        "*Please describe diet";
      valid = false;
    }
  }

  //Owner's name
  if (form.OwnerName.value == "") {
    document.getElementById("OwnerNameError").textContent =
      "*Please enter an owner name";
    valid = false;
  }

  //email
  if (form.OwnerName.value == "") {
    document.getElementById("OwnerNameError").textContent =
      "*Please enter an owner name";
    valid = false;
  }

  // Emergency Contact Name
  if (form.emergency.value == "") {
    document.getElementById("emergencyNameError").textContent =
      "*Please enter an Emergency Contact Name";
    valid = false;
  }
  //contact
  if (form.contact.value == "") {
    document.getElementById("contactError").textContent =
      "*Please enter an contact number";
    valid = false;
  }

  if (
    isNaN(form.contact.value) ||
    (form.contact.value != "" && form.contact.value.length != 10)
  ) {
    document.getElementById("contactError").textContent =
      "*Please enter an vaild contact number";
    valid = false;
  }

  //daytime phone
  if (
    isNaN(form.daytimePhone.value) ||
    (form.daytimePhone.value != "" && form.daytimePhone.value.length != 10)
  ) {
    document.getElementById("daytimePhoneError").textContent =
      "*Please enter an vaild daytime phone";
    valid = false;
  }

  //cell phone
  if (
    isNaN(form.cellphone.value) ||
    (form.cellphone.value != "" && form.cellphone.value.length != 10)
  ) {
    document.getElementById("cellphoneError").textContent =
      "*Please enter an vaild cell phone";
    valid = false;
  }

  if (form.daytimePhone.value == "" && form.cellphone.value == "") {
    document.getElementById("daytimePhoneError").textContent =
      "*Please enter an vaild daytime phone";

    document.getElementById("cellphoneError").textContent =
      "*Please enter an vaild cell phone";
    valid = false;
  }

  //email
  //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (form.email.value != form.email.value.match(mailformat)) {
  //     document.getElementById("emailError").textContent =
  //       "*Please enter an vaild email";
  //     valid = false;
  // }
  //time arrive & leave
  if (form.arrive.value == "") {
    document.getElementById("arriveError").textContent =
      "*Please select one item at least";
    valid = false;
  }
  if (form.leave.value == "") {
    document.getElementById("leaveError").textContent =
      "*Please select one item at least";
    valid = false;
  }
}
//describe box
specialDiet.addEventListener("change", () => {
  describe.classList.toggle("hidden");
  describeText.classList.toggle("hidden");
  describeText.value = "";
});

//Territorial선택 시 empty인지 validate
function checkedTerri() {
  console.log(territorialTitle.checked);
  if (territorialTitle.checked) {
    describelabel.classList.remove("hidden");
    territorialText.classList.remove("hidden");
  }
}
function checkedNotTerri() {
  if (friendly.checked || sleepy.checked || independent.checked) {
    describelabel.classList.add("hidden");
    territorialText.classList.add("hidden");
  }
}

//Submit
document.form.addEventListener("submit", validateForm);
