function parent() {
    var message = 'Hello World';
    function child() {
        //alert (message);
        console.log(message);

    }
    return child;

}
var childFN = parent();
childFN();

