# Javascript Sample Code

- [Javascript Reference][Javascript Reference]
- [Javascript Online Editor][Javascript Online Editor]

## 출력

```js
console.log('Hello, world');
```

## 주석

```js
// 주석 처리된 명령은 실행되지 않습니다.
// console.log('Hello, world');
console.log('Learn Javascript');
/*
 주석을 여러 줄로 쓸 수 있어요.
 이렇게
 */
```

## 데이터 타입

```js
// number
console.log(typeof 1);
console.log(typeof 3.14);
// boolean
console.log(typeof true);
console.log(typeof false);
// string
console.log(typeof 'a');
console.log(typeof 'abc');
console.log(typeof "abcd");
console.log(typeof "abcd");
// object
console.log(typeof []);
console.log(typeof {});
```

## 배열

```js
const array = [1, 2, 3];
array.push(4);
array.push(5);
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);  // undefined
console.log(typeof array);
```

## 객체

```js
const shape = {
  x: 10,
  y: 50,
  color: '#fff'
};
console.log(shape);
console.log(shape.x);
console.log(shape.y);
console.log(shape.color);
console.log(shape.width); // undefined
shape.width = 100;
console.log(shape.width);
console.log(typeof shape);
```

## 변수

```js
const x = 10;
x = 2;  // error: Uncaught Error: "x" is read-only
let y = 1;
y = 2;  // ok
```

## 연산자

### 산술 연산자

```js
const x = 10;
console.log(x + 3);   // 13
console.log(x - 3);   // 10
console.log(x * 3);   // 30
console.log(x / 3);   // 3.3333...
console.log(x % 3);   // 1
console.log(x ** 3);  // 1000
```

### 증가/감소

```js
var y = 1;
console.log(y++); // 1
console.log(++y); // 3
console.log(--y); // 2
console.log(y--); // 2
```

### 관계 연산자

```js
const a = 1;
const b = 2;
console.log(a < b);   // true
console.log(a > b);   // false
console.log(a <= b);  // true
console.log(a >= b);  // false
console.log(a === b); // false
console.log(a !== b); // true
```

### 비트 연산자

```js
const x = 2;  // 10
const y = 3;  // 11
console.log(x & y); // 2
console.log(x | y); // 3
console.log(x ^ y); // 1
console.log(~2);    // -3
console.log(2 << 1); // 4
console.log(2 >> 1); // 1
```

## 반복문

### for

```js
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; ++i) {
  console.log(array[i] * 2);
}
```

### while

```js
const array = [1, 2, 3, 4, 1];
let i = 0;
while (array[i] <= 3) {
  console.log(array[i] )
  ++i;
}
```

## 제어문

### if ... else

```js
const a = 1;
const b = 2;
if (a === b) {
  console.log('same');
} else {
  console.log('different');
}
```

### switch

```js
const day = 'Friday';
switch (day) {
  case 'Monday':
    console.log('It\'s Monday!');
    break;
  case 'Tuesday':
    console.log('It\'s Tuesday!');
    break;
  case 'Wednesday':
    console.log('It\'s Wednesday!');
    break;
  case 'Thursday':
    console.log('It\'s Thursday!');
    break;
  case 'Friday':
    console.log('Thanks God. It\'s Thursday!');
    break;
  case 'Saturday':
    console.log('It\'s Saturday!');
    break;
  case 'Sunday':
    console.log('It\'s Sunday!');
    break;
  default:
    console.log('It\'s not a day!');
    break;
}
```

## 함수

```js
function isEvenNumber(a) {
  return a % 2 === 0
}

console.log(isEvenNumber(5));   // false
console.log(isEvenNumber(10));  // true
```


[Javascript Reference]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
[Javascript Online Editor]: https://playcode.io/
