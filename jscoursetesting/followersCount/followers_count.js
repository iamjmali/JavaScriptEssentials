let count=0; //Initialize count to 0

function increaseCount(){
    count++; //Increment the count by 1
    displayCount(); //Display the count
    checkCountValue(); //Check count value and display messages
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; //Display the count in the HTML
}

function checkCountValue(){
    if(count ===10){
        alert("Your Instagram post gained 10 followers! congratulations!");
    } else if(count ===20){
        alert("Your Instagram post gained 20 followers! keep it up!");
    }
}

function resetCount(){
    count--; //Decrement of the Count by 1 
    displayCount(); //Display the count 
    checkCountValue(); //check count value and display message
  

}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; //Display count in the html
}
function checkCountValue(){
    if(count ===0){
        alert("Followers count has been reset");
    }
}