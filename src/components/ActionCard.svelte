<script>
  export let title = "Title";
</script>

<div class="card w-full sm:w-96 bg-neutral shadow-xl">
  <div class="card-body text-center items-center">
    <div class="card-title">{title}</div>
    <slot name="body" />
    <div class="card-actions w-full">
      <slot name="actions" />
    </div>
  </div>
</div>
