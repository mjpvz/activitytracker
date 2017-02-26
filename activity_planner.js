var uniqueId = 1;
var form_data_holder = [];

function initialize() {

form_template();
}



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
console.log(AddOrRemove);
if (AddOrRemove) {
//  uniqueId = increase(uniqueId);
//  finalbutton = $('#finalbutton').clone(true);
//  $('#finalbutton').remove()
//  var copy = $("#singleform").clone(true);
//  var formId = 'singleform' + uniqueId;
//  copy.attr('id', formId );
//  copy.appendTo("body"); 
//  finalbutton.appendTo("body");

form_template();
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


function form_template() {
    var name_activity = 'firstname';
    var name_freq = 'freq'
    var name_weekends = 'weekends'
    $('#template_location').after(`
    <div id="template">
    <form >
        Activity:
        <input type="text" id="acit" name="${name_activity}" value="activity">
        Frequency:
        <input type="number" min="0" max="365" name="${name_freq}" step="1" value="1">
        Weekends:
        <input type="checkbox" name="${name_weekends}" value="Weekends"><br>
    </form>
    </div>  
    `)
}


