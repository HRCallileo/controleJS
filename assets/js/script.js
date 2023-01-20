fetch(() => new Response(JSON.stringify(playlist)))
  .then(response => response.json())
  .then(data => {
    data.forEach(rowData => {
      let row = document.createElement('tr');
      rowData.forEach(cellData => {
        let cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
      });
    document.thead.appendChild(row);
  })});
