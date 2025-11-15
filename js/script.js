

function criar_task(){
    const task = document.getElementById("task").value
    const currentDate = new Date().toLocaleDateString();
    const task_content = document.getElementById("task-content").value

    const tabela = document.getElementById("conteudo_tabela")

    if (task != "" && task_content != ""){
        tabela.innerHTML += `
        <tr>
                    <td scope="row"><input type="checkbox"></td>
                    <td scope="row">${task}</td>
                    <td scope="row">${currentDate}</td>
                    <td scope="row">${task_content}</td>
                </tr>
        `
        
        document.getElementById("task").value = "";
        document.getElementById("task-content").value = "";

        const fechar = document.getElementById("fechar_canvas");
        fechar.click();
    }
}