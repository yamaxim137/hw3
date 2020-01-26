var addBtn = document.getElementById("add");
addBtn.className = "add-style";
addBtn.addEventListener('click', function(){
    var condModel = new Condicioner("LG");
    var viewcondModel = new ViewCondicioner(condModel, document.getElementById("root"));
    viewcondModel.render();
});

var addBtn = document.getElementById("add-camera");
addBtn.className = "add-style";
addBtn.addEventListener('click', function(){
    var camerModel = new Camera("Sony");
    var viewcamerModel = new ViewCamera(camerModel, document.getElementById("root"));
    viewcamerModel.render();
});

var addBtn = document.getElementById("add-timer");
addBtn.className = "add-style";
addBtn.addEventListener('click', function(){
    var timerModel = new Timer("My1");
    var viewTimerModel = new ViewTimer(timerModel, document.getElementById("root"));
    viewTimerModel.render();
});
