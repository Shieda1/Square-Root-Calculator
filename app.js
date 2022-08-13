// https://calculator.swiftutors.com/square-root-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const squarerootforthegivennumberRadio = document.getElementById('squarerootforthegivennumberRadio');
const numbertofinditssquarerootRadio = document.getElementById('numbertofinditssquarerootRadio');

let squarerootforthegivennumber;
let numbertofinditssquareroot = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

squarerootforthegivennumberRadio.addEventListener('click', function() {
  variable1.textContent = 'Square root for the given number';
  numbertofinditssquareroot = v1;
  result.textContent = '';
});

numbertofinditssquarerootRadio.addEventListener('click', function() {
  variable1.textContent = 'Number to find its square root';
  squarerootforthegivennumber = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(squarerootforthegivennumberRadio.checked)
    result.textContent = `Square root for the given number = ${computeSquarerootforthegivennumber().toFixed(5)}`;

  else if(numbertofinditssquarerootRadio.checked)
    result.textContent = `Number to find its square root = ${computeNumbertofinditssquareroot().toFixed(5)}`;
})

// calculation

function computeSquarerootforthegivennumber() {
  return Math.sqrt(Number(numbertofinditssquareroot.value));
}

function computeNumbertofinditssquareroot() {
  return Math.pow(Number(squarerootforthegivennumber.value), 2);
}