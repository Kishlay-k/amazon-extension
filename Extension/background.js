console.log("Hello World from console");

const data={
    name:"Kishlay",
    id:12345
}

$.post("http://localhost:3000/test",data,function(data,status){
    console.log(data);
})