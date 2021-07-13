let re;
re = /hello/i;
re = /d$/;

const str = `Brad Hello world`;
const result = re.exec(str);
console.log(result);

function reTest() {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} didn't match ${re.source}`);
  }
}

reTest(re, str);
