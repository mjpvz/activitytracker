var uniqueId = 0;
var form_data_holder = [];


function increase(x) {
    x++;
    return x;
    }
    
function decrease(x) {
    x--;
    return x;
    }   
 
function friends_changer(AddOrRemove) {
    if (AddOrRemove) {
    uniqueId = increase(uniqueId);
    form_template();
    } else { 
        if (uniqueId > 0) {
        copy = $("#template" + uniqueId )  
        copy.remove()    
        uniqueId = decrease(uniqueId)
 } } }
 

 
function returnData() {
    var activity =[];
    var freq=[];
    var weekends=[];
    for(count = 1; count < uniqueId+1;count++) {
    activity.push(document.getElementById(`name_activity${count}`).value)
    freq.push(document.getElementById(`name_freq${count}`).value)
    weekends.push(document.getElementById(`name_weekends${count}`).value)
    }
    console.log(activity)
    console.log(freq)
    console.log(weekends)
   
    
}

function form_template() {
    $('#template_location').append(gen_form)
}



function gen_form() {
    html = (`
    <div id="template${uniqueId}">
    <form >
        Activity:
        <input type="text" name="acit" id="name_activity${uniqueId}" value=""placeholder="Activity">
        Frequency:
        <input type="number" min="0" max="365" id="name_freq${uniqueId}" step="1" placeholder="#">
        Weekends:
        <input type="checkbox" id="name_weekends${uniqueId}" value="Weekends"><br>
    </form>
    </div>      
    `)
    return html
}
