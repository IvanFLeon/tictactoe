<style>
  .rotate-center {
    transform-origin: center center;
  }
  .clock {
    transform: rotate(45deg);
  }
  .counterclock {
    transform: rotate(-45deg);
  }
</style>

<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style="display: block;">
  <rect class="rotate-center clock" x="25" y="47.5" width="50" height="5" style="fill:rgb(0,0,0);stroke-width:0;stroke:rgb(0,0,0)"/>
  <rect class="rotate-center counterclock" x="25" y="47.5" width="50" height="5" style="fill:rgb(0,0,0);stroke-width:0;stroke:rgb(0,0,0)"/>
</svg>