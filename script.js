window.onload = function() {
    filter("all");
};

function filter(selection){
    let items = document.getElementsByClassName("portfolio-item");
    for(let i = 0; i < items.length; i++){    
        let item = items[i].classList;
        if (selection == "all" || item.contains(selection)){
            item.add("filtered");
            highlight();}
        else{
            item.remove("filtered");}
    }
}

function highlight(){
    let buttons = document.getElementsByClassName("btn");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            for(let j = 0; j < buttons.length; j++){
                let button =  buttons[j].classList;
                if(button.contains("active")){
                    button.remove("active");}}
            buttons[i].classList.add("active");});
    }
}