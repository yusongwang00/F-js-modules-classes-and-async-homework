/*
promise写法
*/
export function getPoetry() {
  const promise = fetch("https://v1.jinrishici.com/all.json", { method: "get" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(function (err) {
      // Error :( 错误处理代码
    })
    .then((data) => {
      const res = [];
      res.push(data.origin);
      res.push(data.author);
      res.push(data.content);
      return res;
    });
  return promise;
}
/*
data处理部分感觉有更好的的写法，不需要一个一个push，但是没有想出来
下面是async/await写法
 */

// export async function getPoetry() {
//   const response = await fetch("https://v1.jinrishici.com/all.json", {
//     method: "get",
//   });
//   const data = await response.json();
//   let res = [];
//   res.push(data.origin);
//   res.push(data.author);
//   res.push(data.content);

//   return res;
// }
