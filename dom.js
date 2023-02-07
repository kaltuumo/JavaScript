


document.getElementById('btn').onclick = function () {
    btn_click();
}

function btn_click()
{
    
    alert("Welcome JS DOM");
    document.getElementById('btn').style.color = 'black';
    document.getElementById('btn').style.background = 'pink';
    document.getElementById('btn').disabled = true;


    // button reset
    document.getElementById('reset').style.color = 'white';
    document.getElementById('reset').style.background = 'red';

    // clear InnerHtml
    document.getElementById('new').innerHTML = '';
    

    // first h1 (f_h1)
    document.getElementById('f_h1').style.color = "blue";
    document.getElementById('f_h1').style.fontSize = '20px';
    document.getElementById('f_h1').style.textAlign = 'center';
    document.getElementById('f_h1').innerHTML = 'WELCOME TO JAVASCRIPT DOM Monipulation!';

    //  pragraph (pra)
    document.getElementById('pra').innerHTML += " DOM Monipulation";
    document.getElementById('pra').style.backgroundColor = "grey";
    document.getElementById('pra').style.color = "white";
    document.getElementById('pra').style.fontSize = "18px";
    document.getElementById('pra').style.padding = "4px";

    let pra = document.getElementById('pra').innerHTML;
    //  alert(pra);

    document.getElementById('pra').innerHTML =  "JAVASCRIPT"+pra;

    //  console.log("pragraph " +pra)



    document.getElementById('reset').onclick = function () {

        // first h1 (f_h1)
        document.getElementById('f_h1').innerHTML = 'Welcome To javascript course';
        document.getElementById('f_h1').style.color = "black";
        document.getElementById('f_h1').style.fontSize = '30px';
        document.getElementById('f_h1').style.textAlign = 'left';

        //  pragraph (pra)
        document.getElementById('pra').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae mollitia repellendus corrupti obcaecati sint aliquam quibusdam nihil, dolorum consequatur enim, ex numquam qui modi totam omnis porro distinctio deserunt adipisci?";
        document.getElementById('pra').style.backgroundColor = "white";
        document.getElementById('pra').style.color = "black";
        document.getElementById('pra').style.fontSize = "15px";
        document.getElementById('pra').style.padding = "0px";

        // clear InnerHtml
        document.getElementById('class_id').innerHTML = '';

        //    btn submit
        document.getElementById('btn').style.color = 'white';
        document.getElementById('btn').style.background = 'blue';
        document.getElementById('btn').disabled = false;

        //  button reset
        document.getElementById('reset').style.color = 'black';
        document.getElementById('reset').style.background = 'pink';


        // add new 
        document.getElementById('new').innerHTML = "Java script is script language as interpreter, Dom Monipulation ( document object model)";


    }



   
//  ByClassName
    
    let class_dom = document.getElementsByClassName('class_name');
    class_dom[0].style.backgroundColor = "green";
    // console.log(class_dom); // All Array ByClassName
    // console.log(class_dom[0]); // Index 0  <p> content </p>
    console.log(class_dom[0].innerHTML);  // innerHtml (tag  content) 
    console.log(class_dom[1].innerHTML);  // innerHtml (tag  content) 
    console.log(class_dom[2].innerHTML);  // innerHtml (tag  content) 


    document.getElementById('class_id').innerHTML +="<br>"+ class_dom[0].innerHTML;
    document.getElementById('class_id').innerHTML +="<br><br>"+ class_dom[1].innerHTML;
    document.getElementById('class_id').innerHTML +="<br><br>"+ class_dom[2].innerHTML;
    // document.getElementById('class_id') = class_dom[0].innerHTML; // Nothing Show 
    document.getElementById('class_id').style.color="blue";
    //  class_dom[0].style.color = 'blue';
    


    // ByName

    //  let names = document.getElementsByName('names').innerHTML;
     let names = document.getElementsByName('names');
  
    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);
    console.log("=> ",names[0].innerHTML);
    console.log("=> ",names[1].innerHTML);
    console.log("=> ",names[2].innerHTML); 
    console.log("=> ",names[3].innerHTML);

    document.getElementById('names').innerHTML += "<br>"+" => "+names[0].innerHTML;
    document.getElementById('names').innerHTML += "<br>"+" => "+names[1].innerHTML;
    document.getElementById('names').innerHTML += "<br>"+" => "+names[2].innerHTML;
    document.getElementById('names').innerHTML += "<br>"+" => "+names[3].innerHTML;

}

// Enevts

// document.getElementById("event").addEventListener('mouseover',function(){
//     document.getElementById("event_list").innerHTML ="<br> Mouse Over";
// })

document.getElementById('event').addEventListener('click',function(){
    document.getElementById("event_list").innerHTML +="<br> Clicked.. Mouse";
    // document.getElementById("event_list").innerHTML +="<br> Clicked.. Mouse";
})

// arrow Function
document.getElementById('event').addEventListener('dblclick',/*function()*/ ()=>{
    document.getElementById("event_list").innerHTML += "<br>Double click "
})

// document.getElementById("event").addEventListener('mouseout',()=>{
//     document.getElementById('event_list').innerHTML += "<br>Mouse Out";
// })

// document.getElementById('event').addEventListener("mouseleave",()=>{
//     document.getElementById("event_list").innerHTML += "<br> Mouse Leave";
// })

// document.getElementById("event").addEventListener('mouseenter', function(){
//     document.getElementById("event_list").innerHTML += "<br> Mouse Enter";
// }) 


// document.getElementById('event').addEventListener("mousemove",()=>{
//     document.getElementById("event_list").innerHTML += "<br> Mouse Move";
// }) 

document.getElementById('event').addEventListener('mousedown',()=>{
    document.getElementById("event_list").innerHTML += "<br> Mouse Down";
})

document.getElementById('event').addEventListener('mouseup',()=>{
    document.getElementById("event_list").innerHTML += "<br> Mouse Up";
})


document.getElementById('input_name').addEventListener('keyup',()=>{
    // alert(document.getElementById('input_name').value)
    let value = document.getElementById('input_name').value;
    if(value == "Kaltuum"){ 
        document.getElementById('view_input').value = value;
        document.getElementById('out_text').innerHTML += "<br>" + value;
    }else if(value == "Farhiyo"){ 
        document.getElementById('view_input_1').value = value;  
           document.getElementById('out_text').innerHTML += "<br>" + value;
    }
    
})



// alert("Welcome JS DOM")


//  Default DOM Monipulation (or Default Js)
document.getElementById('btn').style.color = 'white';
document.getElementById('btn').style.backgroundColor = "blue";
document.getElementById('btn').style.fontFamily = "tohoma";
document.getElementById('btn').style.fontSize = '25px';

document.getElementById('reset').style.color = 'white';
document.getElementById('reset').style.backgroundColor = "red";
document.getElementById('reset').style.fontFamily = "tohoma";
document.getElementById('reset').style.fontSize = '25px';

document.getElementById('event').style.color = 'white';
document.getElementById('event').style.backgroundColor = "green";
document.getElementById('event').style.fontFamily = "tohoma";
document.getElementById('event').style.fontSize = '25px';
document.getElementById('event').style.marginTop="20px"

document.getElementById('div').innerHTML = " Welcome to DOM Munipulation(Document Object Model)";
document.getElementById('div').style.backgroundColor = "green";
document.getElementById('div').style.fontStyle = "italic"
document.getElementById('div').style.color = "white";
document.getElementById('div').style.padding = '20px';

