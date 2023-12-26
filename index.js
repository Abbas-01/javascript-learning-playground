const insert = document.querySelector(".insert");

window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
    <table>
            <thead>
                <th>Key</th>
                <th>Key Code</th>
                <th>Code</th>
            </thead>
            <tbody>
                <tr>
                    <td>${e.key === " " ? "space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </tbody>
        </table>`
})