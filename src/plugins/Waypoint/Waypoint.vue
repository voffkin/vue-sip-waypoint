<template>
  <div ref="root">
    <div ref="top" />
    <slot />
    <div ref="bottom" />
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill'
require('waypoints/lib/noframework.waypoints.min.js')

function throttle (callback, limit) {
  var waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(function () {
          waiting = false;
      }, limit);
    }
  }
}

export default {
  name: 'Waypoint',
  data () {
    return {
      wpTop: null,
      wpBottom: null,
    }
  },
  props: {
    id: String,
    entryOffset: String,
    leaveOffset: String,
  },
  mounted () {
    this.setHeight()
  },
  methods: {
    setHeight () {
      const resizeObserverSlide = new ResizeObserver( throttle(this.init, 100)  )
      resizeObserverSlide.observe(this.$refs.root);
    },
    init () {
      if(this.wpTop) { this.wpTop.destroy() }
      if(this.wpBottom) { this.wpBottom.destroy() }

      this.wpTop = new Waypoint({
        element: this.$refs.top,
        handler: (direction) => {
          let action = (direction === 'down')? 'entry':'leave'
          this.$emit(action, { direction, element: this.$refs.root, id: this.id })
        },
        offset: this.entryOffset
      })

      this.wpBottom = new Waypoint({
        element: this.$refs.bottom,
        handler: (direction) => {
          let action = (direction === 'down')? 'leave':'entry'
          this.$emit(action, { direction, element: this.$refs.root, id: this.id })
        },
        offset: this.leaveOffset
      })

    }
  }
}
</script>
