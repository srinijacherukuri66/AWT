function getUser(){
    table=document.createElement("TABLE");
        table.border="1";
        table.width="500";
        table.align="center"
        row=table.insertRow(-1)
        h1=row.insertCell(-1)
        h2=row.insertCell(-1)
        h3=row.insertCell(-1)
        h1.innerHTML="Sno."
        h2.innerHTML="REPOSITORY"
        h3.innerHTML="DESCRIPTION"
    var userName=document.getElementById("uid").value;
    var url='https://api.github.com/users/'+userName+'/repos';
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then(data=>{
          data.forEach((ele)=>{
          row1=table.insertRow(-1);
          cell1=row1.insertCell(-1)
          cell2=row1.insertCell(-1)
          cell3=row1.insertCell(-1)
          cell1.innerHTML=data.indexOf(ele)+1
          cell2.innerHTML=ele.name
          cell3.innerHTML=ele.description 
          })
        var div=document.getElementById("res");
        div.append(table); 
        console.log(data)
    })
    }