/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
// Assigning variables to inputs.
const firstName = document.nurseregistration.firstname;
const lastName = document.nurseregistration.lastname;
const dateOfBirth = document.nurseregistration.dob;
const nurseDistrict = document.nurseregistration.district;
const nurseExperience = document.nurseregistration.experience;
const nurseNationality = document.nurseregistration.nationality;
const nurseQualification = document.nurseregistration.qualification;
const male = document.getElementById('male');
const female = document.getElementById('female');

// Assigning variables to errors.
const firstnameError = document.getElementById('firstname-error');
const lastnameError = document.getElementById('lastname-error');
const dobError = document.getElementById('dob-error');
const nurseDistrictError = document.getElementById('district-error');
const nurseExperienceError = document.getElementById('experience-error');
const nurseNationalityError = document.getElementById('nationality-error');
const nurseQualificationError = document.getElementById('qualifiaction-error');

// Assigning the variable to success.
const success = document.getElementById('success-div');

// Regular expressions.
const nonumber = /^[A-Za-z ]+$/;
const capitalize = /^[A-Z][a-z]/;

const validate = (event) => {
  let isValid = true;
  // Validating first name input.
  const Firstname = firstName.value.trim();
  if (Firstname == '') {
    firstnameError.innerHTML = 'This field is required';
    firstnameError.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
    isValid = false;
  } else if (!(Firstname.length > 1 && Firstname.length < 16)) {
    firstnameError.innerHTML = 'First names are between 1-16 letters';
    firstnameError.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
    isValid = false;
  } else if (!(Firstname.match(capitalize))) {
    firstnameError.innerHTML = 'First names begin with capital letters';
    firstnameError.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
    isValid = false;
  } else if (!(Firstname.match(nonumber))) {
    firstnameError.innerHTML = 'First names dont contain numbers';
    firstnameError.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration was Successful !';
    success.style = 'color:#fff; background-color:#03c03c; border:1px solid #03c03c; font-weight:600;';
  }

  // Validating the lastname input.
  const Lastname = lastName.value.trim();
  if (Lastname == '') {
    lastnameError.innerHTML = 'This field is required';
    lastnameError.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
    isValid = false;
  } else if (!(Lastname.length > 1 && Lastname.length < 16)) {
    lastnameError.innerHTML = 'Last name is between 1-16 letters';
    lastnameError.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
    isValid = false;
  } else if (!(Lastname.match(capitalize))) {
    lastnameError.innerHTML = 'Last names start with capital letters';
    lastnameError.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
    isValid = false;
  } else if (!(Lastname.match(nonumber))) {
    lastnameError.innerHTML = 'Last names have no numbers';
    lastnameError.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration was Successful !';
    success.style = 'color:#fff; background-color:#03c03c; border:1px solid #03c03c; font-weight:600;';
  }

  // Validations for the date of birth.
  const today = new Date();
  const birthyear = new Date(dateOfBirth.value);
  const age = today.getFullYear() - birthyear.getFullYear();
  if ((dateOfBirth.value == '' && dateOfBirth.checked == false)) {
    dobError.innerHTML = 'This field is required';
    dobError.style = 'color:red';
    dateOfBirth.style.border = '1px solid red';
    dateOfBirth.focus();
    isValid = false;
  } else if (age < 18) {
    dobError.innerHTML = ' Nurse cannot be below 18';
    dobError.style = 'color:red';
    dateOfBirth.style.border = '1px solid red';
    dateOfBirth.focus();
    isValid = false;
  } else if (age >= 60) {
    dobError.innerHTML = 'Nurse is beyond retirement age';
    dobError.style = 'color:red';
    dateOfBirth.style.border = '1px solid red';
    dateOfBirth.focus();
    isValid = false;
  }
  // Validating the district input.
  const nursedistrict = nurseDistrict.value.trim();
  if (nursedistrict == '') {
    nurseDistrictError.innerHTML = 'This field is required';
    nurseDistrictError.style = 'color:red';
    nurseDistrict.style.border = '1px solid red';
    nurseDistrict.focus();
    isValid = false;
  } else if (!(nursedistrict.length > 1 && nursedistrict.length < 20)) {
    nurseDistrictError.innerHTML = 'Districts are between 1-20 letters ';
    nurseDistrictError.style = 'color:red';
    nurseDistrict.style.border = '1px solid red';
    nurseDistrict.focus();
    isValid = false;
  } else if (!(nursedistrict.match(capitalize))) {
    nurseDistrictError.innerHTML = 'Districts start with capital letters';
    nurseDistrictError.style = 'color:red';
    nurseDistrict.style.border = '1px solid red';
    nurseDistrict.focus();
    isValid = false;
  } else if (!(nursedistrict.match(nonumber))) {
    nurseDistrictError.innerHTML = 'Districts dont contain numbers';
    nurseDistrictError.style = 'color:red';
    nurseDistrict.style.border = '1px solid red';
    nurseDistrict.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration was Successful !';
    success.style = 'color:#fff; background-color:#03c03c; border:1px solid #03c03c; font-weight:600;';
  }
  // Validations of the experience input.
  const NurseExperience = nurseExperience.value.trim();
  if (NurseExperience == '') {
    nurseExperienceError.innerHTML = 'This field is required';
    nurseExperienceError.style = 'color:red';
    nurseExperience.style.border = '1px solid red';
    nurseExperience.focus();
    isValid = false;
  } else if (!(NurseExperience >=0 )) {
    nurseExperienceError.innerHTML = 'Experience cant be less than 0';
    nurseExperienceError.style = 'color:red';
    nurseExperience.style.border = '1px solid red';
    nurseExperience.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration was Successful !';
    success.style = 'color:#fff; background-color:#03c03c; border:1px solid #03c03c; font-weight:600;';
  }
  // Validations for the nationality input.
  const Nursenationality = nurseNationality.value.trim();
  if (Nursenationality == '') {
    nurseNationalityError.innerHTML = 'This is the field required';
    nurseNationalityError.style = 'color:red';
    nurseNationality.style.border = '1px solid red';
    nurseNationality.focus();
    isValid = false;
  } else if (!(Nursenationality.length > 5 && Nursenationality.length < 20)) {
    nurseNationalityError.innerHTML = 'Nationality is between 5-20 letters';
    nurseNationalityError.style = 'color:red';
    nurseNationality.style.border = '1px solid red';
    nurseNationality.focus();
    isValid = false;
  } else if (!(Nursenationality.match(capitalize))) {
    nurseNationalityError.innerHTML = 'Nationality starts with capital letters';
    nurseNationalityError.style = 'color:red';
    nurseNationality.style.border = '1px solid red';
    nurseNationality.focus();
    isValid = false;
  } else if (!(Nursenationality.match(nonumber))) {
    nurseNationalityError.innerHTML = 'Nationality doesnot contain numbers';
    nurseNationalityError.style = 'color:red';
    nurseNationality.style.border = '1px solid red';
    nurseNationality.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration was Successful !';
    success.style = 'color:#fff; background-color:#03c03c; border:1px solid #03c03c; font-weight:600;';
  }

  // Validation of the qualification input.
  if (nurseQualification.value == 'default') {
    nurseQualificationError.innerHTML = 'This field is required';
    nurseQualificationError.style = 'color:red';
    nurseQualification.style.border = '1px solid red';
    nurseQualification.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration was Successful !';
    success.style = 'color:#fff; background-color:#03c03c; border:1px solid #03c03c; font-weight:600;';
  }

  if (!isValid) {
    event.preventDefault();
    return false;
  }
};








// Assiging variable to the form.
const NurseForm = document.getElementById('form-id');
NurseForm.addEventListener('submit', (event) => {
  validate(event);
});

