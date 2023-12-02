const SYMBOLS = {
  '#': 'INCREASE',
  '@': 'DECREASE',
  '*': 'MUILTIPLY_BY_ITSELF',
  '&': 'PRINT_CURRENT'
};

const input = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

function compiler (input = '') {
  let acc = 0;
  let concatenator = '';
  const instructionsArray = input.split('');  
  console.log(instructionsArray);
  
  instructionsArray.forEach(instruction => {
    switch(instruction) {
      case '#':
        acc += 1;
        break;
      case '@':
        acc -= 1;
        break;
      case '*':
        acc *= acc;
        break;
      case '&':
        console.log(acc);
        concatenator += acc;
        break;
      default:
        break;
    }
  });
  return concatenator;
}

compiler(input);