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
        if (hurt) {
            status_text_ele = `<p class="status-text" style="color: orange;">受傷</p>`;
        } else {
            status_text_ele = `<p class="status-text" style="color: black;">服役中</p>`;
        }
    } else {
        status_text_ele = `<p class="status-text" style="color: red;">陣亡</p>`;
    }
    
    return `    
    <div class="died-area" id="died-${index}">
        <img class="died-img" src="assets/umbrella/${index}.jpg" alt="傘${index}" onerror="this.src='assets/umbrella.png'; this.onerror=null;">
        <p class="name">${name}</p>
        ${status_text_ele}
        <p class="from">籍貫：${from}</p>
        <p class="died-reason" style="color: grey;">${diedReason ?? ''}</p>
        ${contribution.map((ctx => `<p class="contribution" style="color: grey;">${ctx}</p>`)).join('')}
        <div class="date-info">
            <p class="join-date">加入日期：${joinDate}</p>
            ${
                diedDate != null ? `<p class="died-date">逝世日期：${diedDate}</p>` : ``
            }
        </div>
    </div>`
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
        <p class="name">${name}</p>
        <p class="status-text" style="color: red;">陣亡</p>
        <p class="from">籍貫：${from}</p>
        <div class="date-info">
        <p class="join-date">加入日期：${joinDate}</p>
        ${
            diedDate != null ? `<p class="died-date">逝世日期：${diedDate}</p>` : ``
        }
        </div>
    </div>
    `
})

document.addEventListener('DOMContentLoaded', () => {
    const diedTable = document.getElementById('died-table') ?? null;
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