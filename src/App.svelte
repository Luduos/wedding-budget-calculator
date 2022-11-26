<script>
  import ActionCard from "./components/ActionCard.svelte";
  import BudgetCalculator from "./components/BudgetCalculator.svelte";
  import DateDifference from "./components/DateDifference.svelte";
</script>

<main>
  <div class="grid place-items-center">
    <ActionCard title="Time to Wedding">
        <DateDifference slot="actions"/>
    </ActionCard>
    <div class="divider" />
    <BudgetCalculator />
  </div>
</main>
