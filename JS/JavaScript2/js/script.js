let begin=prompt("Введіть змінну типу number");
let array=[];

while(isNaN(begin))
{
    if(!isNaN(begin))
    alert("Ваша змінна: " + begin);
    else
    {
        alert("Це не number");
        begin = prompt("Введіть змінну number", begin);
    }
}

for(let i=0;i<=begin;i++)
{
    if(i % 5 == 0){
        array.push(i);
    }   
}

if(array.length != 0)
{
        console.log(array);
}
else{ 
        console.log('Чисел не має');
}

//Друга частина

let m='';
let n='';

while(m == '' || n == '')
{
m = Number(prompt("Введіть початкове значення діапазону", m));
n = Number(prompt("Введіть кінцеве значення діапазону", n));
if(m>n)
{
    alert("Помилка у вказанні діапазону, введіть значення заново");
}
}

var list = new Array;

nextPrime:
for (var i = m; i <= n; i++) {
  for (var j = m; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  list.push(i);
}
console.log(list);