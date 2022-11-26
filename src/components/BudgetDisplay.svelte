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

  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Wert</th>
        <th>Anteil</th>
      </tr>
    </thead>
    <tbody>
      {#each parts as part}
        <tr class="hover">
          <td>{part.name}</td>
          <td>{formatValue(part.percentage * budget)}</td>
          <td>{part.percentage * 100}%</td>
        </tr>
      {/each}
    </tbody>
  </table>

<style>
  table {
    min-width: 50%;
  }
</style>
