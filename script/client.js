//Testing client.js source
console.log('JQ');

$(document).ready(onReady);

let totalMonthlyCosts = 0;
let empSalaryCost = [];

function onReady(){
    //test the 'onReady function' log out,
    console.log('onReady function ready!💪', onReady);
    //grap input value from DOM
    //setting up event listener
    $('.submitBtn').on('click', submitList);
    //add delete button event listener
    $(document).on('click', '.deleteBtn', deleteItem)  
}
function deleteItem(){
    //test
    console.log('deletebtn');
    $(this).closest('tr').remove();
}

function submitList(){
    //test
    console.log('submitList');
// get the value and save it as an object
//
    let employee = {

             firstName:  $('.empFirstName').val(),
             lastName:   $('.empLastName').val(),
             id:         $('.employeeId').val(),
             title:      $('.employeeTitle').val(),
             annualSalary: Number($('.empAnnualSalary').val())

           }

     //push it into an array 
    empSalaryCost.push(employee);

    let el = $('#employeeTable')
    el.empty();

    for(let i=0; i<empSalaryCost.length; i++){
        // render to the DOM
//   // append it into DOM
//  // grab the table <tr> by its id
        el.append
        (`
        
        <tr>
        <th>${empSalaryCost[i].firstName}</th>
        <th>${empSalaryCost[i].lastName}</th>
        <th>${empSalaryCost[i].id}</th>
        <th>${empSalaryCost[i].title}</th>
        <th>${empSalaryCost[i].annualSalary}</th>
        <th><button class ="deleteBtn"> Delete🔴 </button></th>
       </tr>
       
        `)
    }

    //calculate monthly cost of the DOM
    let annualSalary = Number($('.empAnnualSalary').val());
    let monthlySalary = annualSalary / 12;
    totalMonthlyCosts += monthlySalary;
    $('#totalmonthlySalary').text(totalMonthlyCosts.toFixed(2));
    // //empty out all the values
    $('.empFirstName').val('');
    $('.empLastName').val('');
    $('.employeeId').val('');
    $('.employeeTitle').val('');
    $('.empAnnualSalary').val('');

    //if the monthly costs > 20k make a red backround
    
    if(totalMonthlyCosts > 20000){
        $('#monthlyCostColor').css("background-color", "red");
    }else if(totalMonthlyCosts <= 10000){
        $('#monthlyCostColor').css("background-color", "green");

        // //empty out all the values
            $('.empFirstName').val('');
            $('.empLastName').val('');
            $('.employeeId').val('');
            $('.employeeTitle').val('');
            $('.empAnnualSalary').val('');
            
        
    }
}


// function deleteItem(){
//     console.log('deleteItem: ', deleteItem)
//     // delete item use remove method
//    
// }

// function submitList(){
//     //test the submitList and 'log' to the console
//     console.log('submitList🎈', submitList);
//     //grab input VALUE from DOM
//    //..... create an employee object 
//    
//    console.log('employee ', employee)
//   
//  //added delete btn remove from DOM
//   $('#employeeTable').append(`
//   <tr>

//        <th>${employee.firstName}</th>
//        <th>${employee.LastName}</th>
//        <th>${employee.Id}</th>
//        <th>${employee.Title}</th>
//        <th>${employee.annualSalary}</th>
//        <th><button class="deleteEmployeeBtn">Delete🔴</button></th>
//      </tr>
     
//   `)
    
 

// // //calculate monthly cost on the DOM
//     //   let monthlyCost = employee.annualSalary / 12;
//     //   totalMonthlyCosts =+ monthlyCost;
//     //   $('#totalmonthlySalary').text(monthlyCost);
      
//     

    


