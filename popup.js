var checkBox = document.getElementById("onoffswitch");

chrome.storage.sync.get(["enable"], function(data){
  checkBox.checked = data.enable
});

checkBox.onclick = function() {
    if (checkBox.checked == true){
      chrome.storage.sync.set({enable: true}, function(){
        console.log("enabled")
      });
      console.log("on")

    } else {
      chrome.storage.sync.set({enable: false}, function(){
        console.log("enabled")
      });
      console.log("off");
    }
}