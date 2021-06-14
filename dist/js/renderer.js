const CmdLine = require('child_process');


//Algorithme de Recuperation des informations en fonction de la ligne selectionner

const btnConnect = document.querySelectorAll('.t-data a');
let id , allDataRow;
//  console.log(btnConnect);
connectUser();

function connectUser() {
btnConnect.forEach((a)=> {
      
    a.addEventListener('click' , (e)=> {
        id = a.getAttribute('id');
        allDataRow = document.querySelectorAll(`.${id}`);
        const cmd1 = `cmdkey /generic:${allDataRow[3].value} /user:${allDataRow[0].value} /pass:${allDataRow[1]}`;
        const cmd2 = `mstsc /v:${allDataRow[3].value} /admin`;

        CmdLine.exec(cmd1);
        CmdLine.exec(cmd2);
        
        
    })
})

}

