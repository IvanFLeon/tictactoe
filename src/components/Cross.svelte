<script>
  export let svgSize= 50;
  export let svgWidth = 5;
</script>

<svg viewBox="0 0 100 100" style="display: block;">
  <rect x="{(100 - svgSize)/2}%" y="{(100-svgWidth)/2}%" width="{svgSize}%" height="{svgWidth}%" style="fill:rgb(0,0,0);stroke-width:0;stroke:rgb(0,0,0)" transform-origin="center center" transform="rotate(45)"/>
  <rect x="{(100 - svgSize)/2}%" y="{(100-svgWidth)/2}%" width="{svgSize}%" height="{svgWidth}%" style="fill:rgb(0,0,0);stroke-width:0;stroke:rgb(0,0,0)" transform-origin="center center" transform="rotate(-45)"/>
</svg>