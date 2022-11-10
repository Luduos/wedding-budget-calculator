<script>
  export let parts;
  export let budget;

  function formatValue(value) {
    return value.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });
  }
</script>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Anteil</th>
    </tr>
  </thead>
  <tbody>
    {#each parts as part}
      <tr>
        <td>{part.name}</td>
        <td>{formatValue(part.percentage * budget)}</td>
        <td>{part.percentage * 100}%</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    display: grid;
    min-width: 100%;

    grid-template-columns:
      minmax(150px, 2fr)
      minmax(150px, 1fr)
      minmax(150px, 1fr);
  }
  thead,
  tbody,
  tr {
    display: contents;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  td {
    padding: 5px 15px;
  }

  th {
    padding: 15px;
    background: #f9f9f9;
    color: #242424;
    font-size: 1.1rem;
  }

  tr:nth-child(even) td {
    background: #313131;
  }
</style>
