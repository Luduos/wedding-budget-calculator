<script>
  let date;
</script>

<div class="form-control items-center w-full">
  <label class="input-group" for="date">
    <span>Date</span>
    <input
      class="input input-bordered"
      id="date"
      type="date"
      bind:value={date}
    />
  </label>
  <p>{date}</p>
</div>
