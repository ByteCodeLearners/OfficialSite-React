export function Validation(formData) {
  const errors = [];
  if (!formData.firstname) {
    errors.push("First Name is required");
  }
  if (!formData.lastname) {
    errors.push("Last Name is required");
  }
  if (!formData.email) {
    errors.push("Email is required");
  } else if (!isValidEmail(formData.email)) {
    errors.push("Invalid email format");
  }
  if (!formData.mobile) {
    errors.push("Mobile Number is required");
  } else if (!isValidMobileNumber(formData.mobile)) {
    errors.push("Invalid Mobile Number");
  }
  if (!formData.batch) {
    errors.push("Batch is required");
  } else if (!isValidBatch(formData.batch)) {
    errors.push("Invalid batch format");
  }
  if (!formData.linkedin) {
    errors.push("LinkedIn Link is required");
  } else if (!isValidUrl(formData.linkedin)) {
    errors.push("Invalid LinkedIn Link format");
  }
  if (!formData.github) {
    errors.push("GitHub Link is required");
  } else if (!isValidUrl(formData.github)) {
    errors.push("Invalid GitHub Link format");
  }

  return errors;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidMobileNumber(mobileno) {
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobileno);
}

function isValidBatch(batch) {
  const batchRegex = /^(20\d{2})$/;
  return batchRegex.test(batch);
}

function isValidUrl(url) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
}
