const urlBacon = "https://baconipsum.com/api/?type=all-meat";
// const urlBacon = "https://jsonplaceholder.typicode.com/todos/5";

(function(){$.ajax({
    method: "GET",
    url: urlBacon,
    dataType: "json"
}).done(function (data) {
    console.log(data);
}).fail(function () {
    alert("no good");
});
})()
