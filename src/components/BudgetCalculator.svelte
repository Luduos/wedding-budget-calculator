<script>
  import { writable } from "svelte/store";
  import BudgetDisplay from "./BudgetDisplay.svelte";

  let budget = 5000;

  const parts = [
    { name: "Location", percentage: 0.2 },
    { name: "Essen", percentage: 0.15 },
    { name: "Getränke", percentage: 0.05 },
    { name: "Nachtisch", percentage: 0.03 },
    { name: "Geräte", percentage: 0.05 },
    { name: "Fotograf", percentage: 0.1 },
    { name: "Dekoration", percentage: 0.1 },
    { name: "Musik", percentage: 0.05 },
    { name: "Einladungen", percentage: 0.02 },
    { name: "Ausstattung und Friseur", percentage: 0.15 },
    { name: "Sicherheit", percentage: 0.1 },
  ];

  parts.sort((a, b) => {
    return a.percentage > b.percentage ? -1 : 1;
  });

  let sum = 0;
  parts.forEach((value) => (sum += value.percentage));
</script>

<BudgetDisplay bind:budget {parts} />


<p>
  <label for="budget">Budget (€): </label>
  <input type="number" id="budget" name="budget" bind:value={budget} />
</p>
<p>
  Summed up percentage is: {sum}
</p>
