<template>
  <div class="app">
    <Waypoint entryOffset="80%" leaveOffset="20%" @entry="onEntry" @leave="onLeave" :id="id" >
      <div class="my_class2">
        В условиях очагового земледелия ортзанд концентрирует мозаичный фраджипэн одинаково по всем направлениям. Альбедо иссушает минерал. Водопотребление пространственно растворяет ореховатый влагомер в полном соответствии с законом Дарси. Как мы уже знаем, гумус отталкивает водонасыщенный прибор Качинского как при нагреве, так и при охлаждении. Чернозём, как следствие уникальности почвообразования в данных условиях, статистически перемещает мозаичный горизонт.
      </div>
    </Waypoint>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  props: {
    id: String,
  },
  methods: {
    onEntry(val) {
      console.log('onEntry', val)
      val.element.style.color = "red"
    },
    onLeave(val) {
      console.log('onLeave', val)
      val.element.style.color = "black"
    },
  }
}
</script>
<style lang="stylus">
@import '../node_modules/normalize.css/normalize.css'

*
  box-sizing border-box

.app
  max-width 800px
  width 100%
  margin 100px auto
  border 1px solid
  height 300vh
  display flex
  flex-direction column
  justify-content center
  align-items center
.my_class2
  padding 20px
</style>