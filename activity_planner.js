
var uniqueId = 1;
var form_data_holder = [];

$(document).ready(function(){
  $('#friends_add').click(function(f) { friends_changer(1); });
  $('#friends_del').click(function(f) { friends_changer(0); });
  $('#submitbutton').click(function(f) { returnData();});
});

function increase(x) {
    x++;
    return x;
    }
    
function decrease(x) {
    x--;
    return x;
    }   
 

function friends_changer(AddOrRemove) {
// AddOrRemove == 1, add a form
// AddOrRemove == 2, remove a form

if (AddOrRemove) {
 uniqueId = increase(uniqueId);
 finalbutton = $('#finalbutton').clone(true);
 $('#finalbutton').remove()
 var copy = $("#singleform").clone(true);
 var formId = 'singleform' + uniqueId;
 copy.attr('id', formId );
 copy.appendTo("body"); 
 finalbutton.appendTo("body");
 } 
 else {
 	if (uniqueId > 1) {
     copy = $("#singleform" + uniqueId )  
     copy.remove()    
     uniqueId = decrease(uniqueId)
 } } }
 

function returnData() {

for(count = 1; count < uniqueId+1;count++) {
form_data_holder = $(`#singleform${count}`);
prompt(form_data_holder);

}
}
