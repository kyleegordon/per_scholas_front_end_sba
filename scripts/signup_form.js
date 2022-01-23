function collectData() {
    let companyName = document.getElementById('company_name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let website = document.getElementById('website').value;
    let numEmployees = document.getElementById('employees').value;
    let industry = document.getElementById('industry').value;
    let securityProfessionals = document.querySelector('input[name="security_professionals"]:checked').value;
    
    let checkboxes = document.querySelectorAll('input[name="data_types"]:checked');
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
     });

     const accountData = { 
         companyName: companyName,
         email: email,
         passsword: password,
         phone: phone,
         website: website,
         numEmployees: numEmployees,
        industry: industry,
        securityProfessionals: securityProfessionals,
        dataTypes: values
     };

     console.log(accountData);

    alert("Your account has been created:\n" + JSON.stringify(accountData, null, 4));
  }