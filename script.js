function getSum(number, anotherNumber) {
  var number;
  debugger;
  number += 100;
  return number + anotherNumber;
  
};

// Алфавит
var symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Смещение
var shift = 10;

// Закодированное сообщение
var encodedMessage = [8, 28, 36, 52, 56, 40, 23, 31, 56, 39, 38, 28, 48, 52, 58, 56, 38, 27, 32, 37, 56, 40, 23, 31, 56, 39, 38, 41, 39, 32, 57];

// Раскодированное сообщение
var decodedMessage = '';
for (var i = 0; i < encodedMessage.length; i++) {
var index = encodedMessage[i] + shift;
if (index > symbols.length) {
index -= symbols.length;
}
decodedMessage += symbols[index];
}
console.log(decodedMessage);
 