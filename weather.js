function fetchWeather(){
    table=document.createElement("TABLE");
    table.border="1";
    row=table.insertRow(-1)
        h1=row.insertCell(-1);
        h2=row.insertCell(-1);
        h3=row.insertCell(-1);
        h1.innerHTML="DATE";
        h2.innerHTML="MAXTEMP";
        h3.innerHTML="MINTEMP";
        var request=new XMLHttpRequest();
    var city = document.getElementById("city").value;
    var apiKey = '2578a5dfba20e6f114d57a2840d9561f';
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
   request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response);
        result.list.forEach((day)=>{
            row1=table.insertRow(-1);
            cell1=row1.insertCell(-1);
            cell2=row1.insertCell(-1);
            cell3=row1.insertCell(-1);
            cell1.innerHTML=day.dt_txt;
            cell2.innerHTML=day.main.temp_max;
            cell3.innerHTML=day.main.temp_min;
        })
    }
        var div=document.getElementById("res");
        div.append(table);
        request.send();
}