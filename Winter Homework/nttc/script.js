function numToText(n) {
  if (n < 0 || n > 1000000) return "Enter number between 0 and 1mil";
  if (n === 0) return "Zero";
  if (n === 1000000) return "One Mil";

  let oneDig = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  let teen = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  let tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  let group = ["", "Thousand", "Million"];

  function convert(num) {
    let result = "";

    if (num >= 100) {
      result += oneDig[Math.floor(num / 100)] + " Hundred ";
    }

    let remainder = num % 100;
    if (remainder >= 10 && remainder < 20) {
      result += teen[remainder - 10];
    } else {
      if (remainder >= 20) {
        result += tens[Math.floor(remainder / 10)] + " ";
      }
      if (remainder % 10 > 0) {
        result += oneDig[remainder % 10];
      }
    }

    return result.trim();
  }

  let thousandsGroup = [];
  while (n > 0) {
    thousandsGroup.push(n % 1000);
    n = Math.floor(n / 1000);
  }

  let words = [];
  for (let i = thousandsGroup.length - 1; i >= 0; i--) {
    if (thousandsGroup[i] > 0) {
      words.push(convert(thousandsGroup[i]) + (group[i] ? " " + group[i] : ""));
    }
  }

  return words.join(" ").trim();
}

document.getElementById('convertButton').onclick = function() {
  let n = parseInt(document.getElementById('numberInput').value);
  document.getElementById('output').innerText = numToText(n);
};
