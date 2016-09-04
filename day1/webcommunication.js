function WebConnector(url){
  var currObj = this;
  currObj.fetchData = function(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        currObj.onResponse(this.responseText);
      }
    };
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }
  currObj.onResponse = function(response) {
    var obj = JSON.parse(response);
    var headers = obj.headers;

    document.getElementById('divIp').innerHTML = '<h1>'+obj.origin +'</h1>'
    console.log('Origin - '+obj.origin);
    console.log('Accept - '+headers.Accept);
  }
}

var connector = new WebConnector('https://httpbin.org/get');
connector.fetchData();
