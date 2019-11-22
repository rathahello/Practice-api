$(document).ready(function(){
  var url = "https://reqres.in/api/users?page=2";
  $.ajax({
    dataType: "json",
    url: url,
    success: function(data){
      var result = "";
      data.data.forEach(el => {
        var {id,email,first_name,last_name,avatar} = el;
        result += `
          <tr>
            <td>${id}</td>
            <td>${email}</td>
            <td>${first_name}</td>
            <td>${last_name}</td>
            <td>${avatar}</td>
          </tr>
        `;
      });
      $('#result').append(result);
    }
  }); 
});