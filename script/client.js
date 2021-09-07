//Testing client.js source
console.log('JQ');

$(document).ready(onReady);
let totalMonthlyCosts = 0;
 

function onReady(){
    //test the 'onReady function' log out,
    console.log('onReady function ready!💪', onReady);
    //grap input value from DOM
    //setting up event listener
    $('.submitBtn').on('click', submitList);
    //add delete button event listener
    $(document).on('click', '.deleteEmployeeBtn', deleteItem)
    
}
function deleteItem(){
    console.log('deleteItem: ', deleteItem)
    // delete item use remove method
    $(this).closest('tr').remove();
}

function submitList(){
    //test the submitList and 'log' to the console
    console.log('submitList🎈', submitList);
    //grab input VALUE from DOM
   //..... create an employee object 
   let employee = {
     firstName:  $('.empFirstName').val(),
     LastName:   $('.empLastName').val(),
     Id:         $('.employeeId').val(),
     Title:      $('.employeeTitle').val(),
     annualSalary: Number($('.empAnnualSalary').val())

   }
   console.log('employee ', employee)
 // render to the DOM
  // append it into DOM
 // grab the table <tr> by its id 
 //added delete btn remove from DOM
  $('#employeeTable').append(`
  <tr>

       <th>${employee.firstName}</th>
       <th>${employee.LastName}</th>
       <th>${employee.Id}</th>
       <th>${employee.Title}</th>
       <th>${employee.annualSalary}</th>
       <th><button class="deleteEmployeeBtn">Delete🔴</button></th>
     </tr>
     
  `)
    
 

// //calculate monthly cost on the DOM
    //   let monthlyCost = employee.annualSalary / 12;
    //   totalMonthlyCosts =+ monthlyCost;
    //   $('#totalmonthlySalary').text(monthlyCost);
      
    let annualSalary = Number($('.empAnnualSalary').val());
    let monthlySalary = annualSalary / 12;
    totalMonthlyCosts += monthlySalary;
    $('#totalmonthlySalary').text(totalMonthlyCosts.toFixed(2));

    //if the monthly costs > 20k make a red backround
    
    if(totalMonthlyCosts > 20000){
        $('#monthlyCostColor').css("background-color", "red");
    }else if(totalMonthlyCosts <= 10000){
        $('#monthlyCostColor').css("background-color", "green");
        
    }

//empty out all the values
$('.empFirstName').val('');
$('.empLastName').val('');
$('.employeeId').val('');
$('.employeeTitle').val('');
$('.empAnnualSalary').val('');
}