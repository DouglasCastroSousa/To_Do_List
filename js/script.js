let LineBeenEdited = null;


function saving_task(){

    const taskInput = document.getElementById("canvas-task");
    const contentInput = document.getElementById("canvas-task-content");

    const task = taskInput.value;
    const task_content = contentInput.value;
    
    const currentDate = new Date().toLocaleDateString();

    const tabela = document.getElementById("table-content");

    if (task != "" && task_content != ""){
        
        if (LineBeenEdited !== null) {

            LineBeenEdited.cells[1].innerText = task;
            LineBeenEdited.cells[3].innerText = task_content;
            
            LineBeenEdited = null; 
            
        } else {
            // --- MODO CRIAÇÃO: Cria uma nova linha (Seu código original) ---
            
            tabela.innerHTML += `
            <tr>
                <td scope="row"><input class="form-check-input" type="checkbox"></td>
                <td scope="row">${task}</td>
                <td scope="row">${currentDate}</td>
                <td scope="row">${task_content}</td>
                <td scope="row">
                    <button class="btn btn-primary px-2 py-1" onclick="editing_line(this)">edit</button>
                    <button class="btn btn-danger px-2 py-1" onclick="removing_line(this)">delete</button>
                </td>
            </tr>
            `;
        }
        
        document.getElementById("canvas-task").value = "";
        document.getElementById("canvas-task-content").value = "";

        const fechar = document.getElementById("close_canvas_btn");
        fechar.click();
    }
}

function editing_line(btn){
    const row = btn.parentNode.parentNode;
    
    LineBeenEdited = row;

    const cells = row.cells;

    const taskName = cells[1].innerText;
    const taskObs = cells[3].innerText;

    document.getElementById("canvas-task").value = taskName;
    document.getElementById("canvas-task-content").value = taskObs;

    document.getElementById("add_button").click();
}

function removing_line(btn) {
    // O botão está dentro de um td, que está dentro de um tr
    // btn -> td -> tr
    var row = btn.parentNode.parentNode;
    row.remove();
}