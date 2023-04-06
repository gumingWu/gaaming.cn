---
year: 2023
date: 04-06 13:15
language: CN
---

# 十进制转其他进制

在这里记录下十进制转其他进制的通用方法，[参考文章](https://leetcode.cn/problems/convert-to-base-2/solution/python3-duan-chu-fa-fu-er-jin-zhi-zhuan-1zahd/)

n为输入的十进制数，M为需要转换的进制，支持正负进制

```ts
function convert(n: number, M: number): number[] | undefined {
  if(M === 0) return
  if(n === 0) return [0]

  let x = n, y = 0, res = []
  while(x) {
    if(M > 0) {
      y = x % M
      x = Math.floor(x / M)
    } else {
      y = x - Math.floor((x + M + 1) / M) * M
      x = Math.floor((x + M + 1) / M)
    }
    res.push(y)
  }
  return res.reverse()
}

console.log(convert(10, 2));  // 10 -> 1010
console.log(convert(10, 4));  // 10 -> 22
console.log(convert(10, -2)); // 10 -> 11110

```