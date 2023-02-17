const http=require('http');
const server=http.createServer((res,rej)=>{
  console.log('shiv') ; 
});
server.listen(4000);