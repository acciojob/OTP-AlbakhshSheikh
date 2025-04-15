//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === "Backspace") {
      if (e.target.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
        e.preventDefault();
      }
    }
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pasteData = (e.clipboardData || window.clipboardData).getData('text');
    const pasteValues = pasteData.split('').filter(c => /\d/.test(c)).slice(0, 6);

    pasteValues.forEach((digit, i) => {
      if (inputs[i]) {
        inputs[i].value = digit;
      }
    });

    if (pasteValues.length > 0) {
      inputs[pasteValues.length - 1].focus();
    }
  });
});

// Auto focus first input on load
window.addEventListener('load', () => {
  inputs[0].focus();
});
