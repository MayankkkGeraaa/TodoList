$(()=>{
    let ulTasks=$('#ulTasks');
    let btnAdd=$('#btnAdd')
    let btnClear=$('#btnClear')
    let btnSort=$('#btnSort')
    let btnReset=$('#btnReset');
    let inpNewTask=$('#inpNewTask')

    function addItem(){
        let listItem=$('<li></li>',{
            'class':'list-group-item',
            text:inpNewTask.val()
        })
        console.log("button clicked")
        listItem.click((event)=>{
            console.log("item clicked",$(event.target))
            $(event.target).toggleClass('done')
            //we could have also done listItem.toggleClass('done')
        })
        ulTasks.append(listItem)
        inpNewTask.val("")
        toggleButtons();
    }


    inpNewTask.keypress((e)=>{
        //console.log(e.which);
        //enter.which is 13
        if(e.which=='13'){
            addItem();
        }
    })

    function clearDone(){
        console.log($('#ulTasks .done'));
        $('#ulTasks .done').remove();
        toggleButtons();
    }

    function sortTasks(){
        let temp=$('#ulTasks .done')
        temp.remove();
        ulTasks.append(temp);
    }

    function reset(){
        inpNewTask.val("");
        toggleButtons(true);
    }

    function toggleButtons(valIsEmpty){
        btnReset.attr('disabled',inpNewTask.val()=='');
        btnAdd.attr('disabled',inpNewTask.val()=='')
        btnClear.attr('disabled',ulTasks.children().length<1);
        btnSort.attr('disabled',ulTasks.children().length<1);
    }

    inpNewTask.on('input',()=>{
        console.log(inpNewTask.val());
        toggleButtons(inpNewTask.val()=='');
    })

    btnClear.click(clearDone);
    btnAdd.click(addItem);
    btnSort.click(sortTasks);
    btnReset.click(reset);
    
})