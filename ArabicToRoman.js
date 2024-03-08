const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output');

function convertToRoman(numberValue) {
const numerals = [
  {value: 1000, numeral: "M"},
  {value: 900, numeral: "CM"},
  {value: 500, numeral:"D"},
  {value: 400, numeral:"CD"},
  {value: 100, numeral:"C"},
  {value: 90, numeral:"XC"},
  {value: 50, numeral:"L"},
  {value: 40, numeral:"XL"},
  {value: 10, numeral:"X"},
  {value: 9, numeral:"IX"},
  {value: 5, numeral:"V"},
  {value: 4, numeral:"IV"},
  {value: 1, numeral:"I"},
];

let result = '';

for (const pair of numerals) {
while (numberValue >= pair.value) {
      result += pair.numeral;
      numberValue -= pair.value;
    }
  }
  return result;
}

function checkInput() {
  const numberValue = parseInt(numberInput.value);

  if (!numberValue) {
    output.textContent = "Please enter a valid number";
    output.classList.toggle("hidden");
    return;
  } else if (numberValue <= 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (numberValue >= 4000) { 
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  
  output.textContent = convertToRoman(numberValue);
  output.classList.toggle("hidden");
} 

convertBtn.addEventListener('click', checkInput);
convertBtn.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.key === "Enter") {
    checkInput;
  }
})