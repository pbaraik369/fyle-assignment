function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function showError(input) {
  const errorIcon = input.parentElement.querySelector(".error-icon");
  const tooltip = input.parentElement.querySelector(".tooltip");
  errorIcon.style.display = "inline-block";
  tooltip.style.display = "block";
}

function hideError(input) {
  const errorIcon = input.parentElement.querySelector(".error-icon");
  const tooltip = input.parentElement.querySelector(".tooltip");
  errorIcon.style.display = "none";
  tooltip.style.display = "none";
}

function calculateTax() {
  const grossIncome = parseFloat(document.getElementById("grossIncome").value);
  const extraIncome = parseFloat(document.getElementById("extraIncome").value);
  const ageGroup = document.getElementById("ageGroup").value;
  const deductions = parseFloat(document.getElementById("deductions").value);

  let totalIncome = grossIncome + extraIncome - deductions;
  let tax = 0;

  if (totalIncome <= 800000) {
    tax = 0;
  } else {
    let taxableIncome = totalIncome - 800000;

    switch (ageGroup) {
      case "<40":
        tax = taxableIncome * 0.3;
        break;
      case "40-59":
        tax = taxableIncome * 0.4;
        break;
      case "≥60":
        tax = taxableIncome * 0.1;
        break;
    }
  }

  const taxResult = document.getElementById("taxResult");
  taxResult.textContent = tax.toLocaleString("en-IN");
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  const closeBtn = document.querySelector(".modal .close");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
