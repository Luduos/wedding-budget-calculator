<script>
    export let budget = 5000;
    export let description = "Description";
    export let currency = "Curr";
</script>

<div class="form-control">
    <label class="input-group" for="budget">
      <span>{description}</span>
      <input class="input input-bordered input-md " type="number" id="budget" name="budget" bind:value={budget} />
      <span>{currency}</span>
    </label>
  </div>