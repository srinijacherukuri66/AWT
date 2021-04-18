function getDetails(){
    table=document.createElement("TABLE");
        table.border="1";
        table.width="800";
        table.align="center"
        row=table.insertRow(-1)
        h1=row.insertCell(-1)
        h2=row.insertCell(-1)
        h3=row.insertCell(-1)
        h4=row.insertCell(-1)
        h5=row.insertCell(-1)
        h1.innerHTML="Sno."
        h2.innerHTML="Date"
        h3.innerHTML="Active Cases"
        h4.innerHTML="Death"
        h5.innerHTML="Recovered"
    var country=document.getElementById("country").value;
    var url="https://api.covid19api.com/country/"+country;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>
    {
          data.forEach((ele)=>{
            
          row1=table.insertRow(-1);
          cell1=row1.insertCell(-1)
          cell2=row1.insertCell(-1)
          cell3=row1.insertCell(-1)
          cell4=row1.insertCell(-1)
          cell5=row1.insertCell(-1)
    
          cell1.innerHTML=data.indexOf(ele)+1
            cell2.innerHTML=ele.Date
          cell3.innerHTML=ele.Active
          cell4.innerHTML=ele.Deaths
          cell5.innerHTML=ele.Recovered
          })
        var div=document.getElementById("res");
        div.append(table); 
        console.log(data);
    })
    
    }