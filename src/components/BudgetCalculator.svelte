<script>
  import { writable } from "svelte/store";
  import ActionCard from "./ActionCard.svelte";
  import BudgetDisplay from "./BudgetDisplay.svelte";
  import BudgetInput from "./BudgetInput.svelte";

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

<ActionCard title="Budget Overview">
  
  <BudgetDisplay slot="body" bind:budget {parts} />
  <BudgetInput slot="actions" bind:budget currency="€" description="Budget" />
</ActionCard>
