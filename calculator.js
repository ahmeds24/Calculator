function add(x,y){
    return(x + y);
}

function subtract(x,y){
    return(x - y);
}

function divide(x,y){
    return((x) / (y));
}

function product(x,y){
    return((x) * (y));
}

function cube(x){
    return(x * x * x);
}

function power(x, y){
    var value = 1;
    for(i=1; i<=y; i++){
    value *= x;
}
  return value;
}

function mod(x, y){
    return(x % y);
}

var square= function(x){
    return(x * x);
};

function calculator() {
    //Create a variable to determine action to take
    //Initializing it to "start"
    var action = "start";
    //Setting and variable to hold user values from user input
    var inputTokens = null;
    //Create an a rray of strings that hold all the supported commands
    var features = ["add", "subtract", "multiply", "divide", "square", "cube", "power", "mod"];
    
    //Start a loop that runs until the user says 'quit'
    while(action === "start" || action !== "quit") {
        //assign the input the user gives us to the action variable
        action = prompt("What would you like to do [type 'quit' to exit]?");
        //We want each word by itself so we use Strings split() method to create an array split on the " "
        inputTokens = action.split(" ");
        //Check the first word to see if the user wants to quit
        if(inputTokens[0] === "quit") {
            //Break out of the entire funtion Calculator()
            return;
        //Else: check if the first word is a suppored feature. If not the user typed something wrong. Tell them to try again
        //Look up the includes() method to understand what we did here
        } else if(features.includes(inputTokens[0]) === false) {
            action = prompt("Error, Enter Feature or Exit [type 'quit' to exit]?");
        } 
        
            x = parseInt(inputTokens[1]);
            y = parseInt(inputTokens[2]);
         
         switch(inputTokens[0]){
           case "add":
                     return  alert(add(x,y));
              break;
              
          case "subtract":
                     return  alert(subtract(x,y));
              break;
              
          case "product":
                     return   alert(product(x,y));
              break;
              
          case "divide":
                     return   alert(divide(x,y));
              break;
              
          case "cube":
                     return     alert(cube(x,y));
              break;
           
          case "power":
                     return    alert(power(x,y));
              break;
              
          case "mod":
                     return    alert(mod(x,y));
              break;
              
          case "sqaure":
                     return   alert(sqaure(x,y));
              break;
              
            default:
                "not right";
         }
            //This block of code needs to be updated to answer the assignment. 
            //There are many ways you could do this:
            //1. You could countine the else if logic for each case
            //2. You could implement switcg statement logic in the block
            //3. You could do anything the code allows, but i recommend 1 or 2 :)
    }
}

calculator();