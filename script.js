const TableGenerator = ((object) => {
    const index = object['index'];
    const name = object['name'];
    const from = object['from'];
    const joinDate = object['join-date'];
    const diedDate = object['died-date'];
    const diedReason = object['died-reason'];
    const contribution = object['contribution'];
    const hurt = object['hurt'];

    let status_text_ele;
    if (diedDate == null) {
        status_text_ele = hurt 
            ? '<span style="color: orange;">受傷</span>' 
            : '<span style="color: black;">服役中</span>';
    } else {
        status_text_ele = '<span style="color: red;">陣亡</span>';
    }

    return `    
        <tr>
            <td>${index}</td>
            <td><a href="#died-${index}">${name}</a></td>
            <td>${status_text_ele}</td>
        </tr>
    `
})

const diedBoardGenerator = ((object) => {    
    const index = object['index'];
    const name = object['name'];
    const from = object['from'];
    const joinDate = object['join-date'];
    const diedDate = object['died-date'];
    const diedReason = object['died-reason'];
    const contribution = object['contribution'];
    const hurt = object['hurt'];

    if (diedDate == null) return ``;

    return `    
    <div class="died-area" id="died-${index}">
        <img class="died-img" src="assets/umbrella/${index}.jpg" alt="傘${index}" onerror="this.src='assets/umbrella.png'; this.onerror=null;">
        <p>${name}</p>
        <b><p style="color: red;">陣亡</p></b>
        <p>籍貫：${from}</p>
        <p>加入日期：${joinDate}</p>
        ${
            diedDate != null ? `<p>逝世日期：${diedDate}</p>` : ``
        }
    </div>
    `
})

document.addEventListener('DOMContentLoaded', () => {
    const diedTable = document.getElementById('died-table')?.getElementsByTagName('tbody')[0];
    const diedBoard = document.getElementById('died-board') ?? null;
    fetch('list.json')
        .then(response => response.json())
        .then(data => {
            data.umbrella.forEach(object => {
                if (diedTable) diedTable.innerHTML += TableGenerator(object);
                if (diedBoard) diedBoard.innerHTML += diedBoardGenerator(object);
            });
    })
});