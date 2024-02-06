





function check_Box() {
    const cat1 = 0; 
    const cat2 = 0; 
    const cat3 = 0; 
    
    let kittyBox1 = document.getElementById("k1"); 
    let kittyBox2 = document.getElementById("k2"); 
    let kittyBox3 = document.getElementById("k3"); 
    if (kittyBox1.checked == true){
        kitVal = 1; 
        cat1 += 1; 
    }else if(kittyBox2.checked == true){
        kitVal = 2; 
        cat2 += 1; 
    }else if(kittyBox3.checked == true){ 
        kitVal = 3;
        cat3 += 1;  
    }
    localStorage.setItem('kittyVal',kitVal);


} 






