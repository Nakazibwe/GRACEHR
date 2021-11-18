/* eslint-disable no-empty */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */

// Assigning variables to inputs.
const firstName = document.teacherregistation.firstname;
const lastName = document.teacherregistation.lastname;
const teacherDOB = document.teacherregistation.teacherdob;
const teacherDistrict = document.teacherregistation.district;
const teacherExperience = document.teacherregistation.experience;
const teacherNationality = document.teacherregistation.nationality;
const teacherqualification = document.teacherregistation.qualification;
const male = document.getElementById('male-gender');
const female = document.getElementById('female-gender');

// Assigning variables to errors.
const firstNameError = document.getElementById('firstname-error');
const lastNameError = document.getElementById('lastname-error');
const teacherDOBError = document.getElementById('dob-error');
const teacherDistrictError = document.getElementById('district-error');
const teacherExperienceError = document.getElementById('experience-error');
const teacherNationalityError = document.getElementById('nationality-error');
const teacherqualificationError = document.getElementById('qualification-error');

// Assigning varibale to success.
const success = document.getElementById('success-div');

// Regular expressions.
const nonumber = /^[A-Za-z ]+$/;
const capitalize = /^[A-Z][a-z]/;

// Validation function.
const validate = (event) => {
  let isValid = true;
  // Validating firstname input.
  const Firstname = firstName.value.trim();
  if (Firstname == '') {
    firstNameError.innerHTML = 'This field is required';
    firstNameError.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
    isValid = false;
  } else if (!(Firstname.length > 1 && Firstname.length < 16)) {
    firstNameError.innerHTML = 'First names are between 1-16 letters';
    firstNameError.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
    isValid = false;
  } else if (!Firstname.match(capitalize)) {
    firstNameError.innerHTML = 'First names begin with capital letters';
    firstNameError.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
    isValid = false;
  } else if (!Firstname.match(nonumber)) {
    firstNameError.innerHTML = 'First names have no numbers';
    firstNameError.style = 'color:red';
    firstName.style.border = '1px solid red';
    firstName.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration Successful !';
    success.style = 'color:#fff; background-color:#03c03c; font-weight:600; border: 1px solid #03c03c';
  }

  // Validating the last name input.
  const Lastname = lastName.value.trim();
  if (Lastname == '') {
    lastNameError.innerHTML = 'This field is required';
    lastNameError.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
    isValid = false;
  } else if (!(Lastname.length > 1 && Lastname.length < 16)) {
    lastNameError.innerHTML = 'Last names are between 1-16 letters';
    lastNameError.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
    isValid = false;
  } else if (!Lastname.match(capitalize)) {
    lastNameError.innerHTML = 'Last names begin with capital letters';
    lastNameError.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
    isValid = false;
  } else if (!Lastname.match(nonumber)) {
    lastNameError.innerHTML = 'Last names have no numbers';
    lastNameError.style = 'color:red';
    lastName.style.border = '1px solid red';
    lastName.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration Successful !';
    success.style = 'color:#fff; background-color:#03c03c; font-weight:600; border: 1px solid #03c03c';
  }

  // Validating the date input.
  const today = new Date();
  const birthyear = new Date(teacherDOB.value);
  const age = today.getFullYear() - birthyear.getFullYear();
  if (teacherDOB.checked == false && teacherDOB.value == '') {
    teacherDOBError.innerHTML = 'This field is required';
    teacherDOBError.style = 'color:red';
    teacherDOB.style.border = '1px solid red';
    teacherDOB.focus();
    isValid = false;
  } else if (age < 18) {
    teacherDOBError.innerHTML = 'Teacher cannot be below 18years';
    teacherDOBError.style = 'color:red';
    teacherDOB.style.border = '1px solid red';
    teacherDOB.focus();
    isValid = false;
  } else if (age >= 60) {
    teacherDOBError.innerHTML = 'Teacher is beyond retirement age';
    teacherDOBError.style = 'color:red';
    teacherDOB.style.border = '1px solid red';
    teacherDOB.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration Successful !';
    success.style = 'color:#fff; background-color:#03c03c; font-weight:600; border: 1px solid #03c03c';
  }

  // Validating the District input.
  const Teacherdistrict = teacherDistrict.value.trim();
  if (Teacherdistrict == '') {
    teacherDistrictError.innerHTML = 'This field is required';
    teacherDistrictError.style = 'color:red';
    teacherDistrict.style.border = '1px solid red';
    teacherDistrict.focus();
    isValid = false;
  } else if (!(Teacherdistrict.length > 1 && Teacherdistrict.length < 20)) {
    teacherDistrictError.innerHTML = 'District is between 1-20 letters';
    teacherDistrictError.style = 'color:red';
    teacherDistrict.style.border = '1px solid red';
    teacherDistrict.focus();
    isValid = false;
  } else if (!(Teacherdistrict.match(capitalize))) {
    teacherDistrictError.innerHTML = 'Districts begin with capital letters ';
    teacherDistrictError.style = 'color:red';
    teacherDistrict.style.border = '1px solid red';
    teacherDistrict.focus();
    isValid = false;
  } else if (!(Teacherdistrict.match(nonumber))) {
    teacherDistrictError.innerHTML = 'Districts have no numbers';
    teacherDistrictError.style = 'color:red';
    teacherDistrict.style.border = '1px solid red';
    teacherDistrict.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration Successful !';
    success.style = 'color:#fff; background-color:#03c03c; font-weight:600; border: 1px solid #03c03c';
  }

  // Validating the experience input.
  const TeacherExperience = teacherExperience.value.trim();
  if (TeacherExperience == '') {
    teacherExperienceError.innerHTML = 'This field is required';
    teacherExperienceError.style = 'color:red';
    teacherExperience.style.border = '1px solid red';
    teacherExperience.focus();
    isValid = false;
  } else if (!(TeacherExperience >= 0)) {
    teacherExperienceError.innerHTML = 'Experience cannot be below zero';
    teacherExperienceError.style = 'color:red';
    teacherExperience.style.border = '1px solid red';
    teacherExperience.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration Successful !';
    success.style = 'color:#fff; background-color:#03c03c; font-weight:600; border: 1px solid #03c03c';
  }
  // Validating the nationality input.
  const TeacherNationality = teacherNationality.value.trim();
  if (TeacherNationality == '') {
    teacherNationalityError.innerHTML = 'This field is required';
    teacherNationalityError.style = 'color:red';
    teacherNationality.style.border = '1px solid red';
    teacherNationality.focus();
    isValid = false;
  } else if (!(TeacherNationality.length > 5 && TeacherNationality.length < 20)) {
    teacherNationalityError.innerHTML = 'Nationality  is between 5-20 letters';
    teacherNationalityError.style = 'color:red';
    teacherNationality.style.border = '1px solid red';
    teacherNationality.focus();
    isValid = false;
  } else if (!(TeacherNationality.match(capitalize))) {
    teacherNationalityError.innerHTML = 'Nationality starts with capital letters';
    teacherNationalityError.style = 'color:red';
    teacherNationality.style.border = '1px solid red';
    teacherNationality.focus();
    isValid = false;
  } else if (!(TeacherNationality.match(nonumber))) {
    teacherNationalityError.innerHTML = 'Nationality starts with capital letters';
    teacherNationalityError.style = 'color:red';
    teacherNationality.style.border = '1px solid red';
    teacherNationality.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration Successful !';
    success.style = 'color:#fff; background-color:#03c03c; font-weight:600; border: 1px solid #03c03c';
  }
  // Validating the qualification input.
  const Teacherqualification = teacherqualification.value.trim();
  if (Teacherqualification == 'default') {
    teacherqualificationError.innerHTML = 'This field is required';
    teacherqualificationError.style = 'color:red';
    teacherqualification.style.border = '1px solid red';
    teacherqualification.focus();
    isValid = false;
  } else {
    success.innerHTML = 'Registration Successful !';
    success.style = 'color:#fff; background-color:#03c03c; font-weight:600; border: 1px solid #03c03c';
  }

  if (!isValid) {
    event.preventDefault();
    return false;
  }
};

const teacherForm = document.getElementById('form-id');

teacherForm.addEventListener('submit', (event) => {
  validate(event);
});
