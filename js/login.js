function store(){

  var name = document.getElementById('name');
  var mono = document.getElementById('mono');

    
    let user_records=new Array();
  user_records=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]

  user_records.push({
      'name':name.value,
      'mono':mono.value
  })
  localStorage.setItem("user",JSON.stringify(user_records));

      alert('Your account has been created');
      window.open('../index/themain.html');  
}
