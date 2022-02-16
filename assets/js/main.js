//-----lev2_1-----
console.log("%c-----lev2_1-----", "color: lightgreen");
imageArray = () => {
  let returnArray = [];

  for(let i = 1; i <= 100; i++) {
    if(i === 100) {
      returnArray.push('image_' + i + '.jpg');
    } else if(i <= 99 && i >= 10) {
      returnArray.push('image_0' + i + '.jpg');
    } else {
      returnArray.push('image_00' + i + '.jpg');
    }
  }

  return returnArray;
}

console.log(imageArray());


//-----lev2_2-----
const inputNumElem = document.getElementById('input-number');
const outElement = document.getElementById('out');

let o = [];

loop = () => {
  for(let i = 0; i < inputNumElem.value; i++) {
    o.push('o');
  }

  let str = o.join("");

  outElement.innerHTML = `
    <h1>L${str}p</h1>
  `
}
