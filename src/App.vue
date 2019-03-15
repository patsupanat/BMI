<template>
  <div id="app">
    <h1>BMI</h1>
    <div>
      ส่วนสูง : <input type="number" v-model="height" min="0"> <br>
      น้ำหนัก : <input type="number" v-model="weight"> <br>
      เพศ : ชาย <input type="radio" v-model="sex" value="ชาย"> หญิง <input type="radio" v-model="sex" value="หญิง"> <br>
      อายุ : <input type="number" v-model="age">
    </div>
    <hr>
    <div>
      <h1>Result</h1>
      <b>ส่วนสูง</b>: {{height}} <br>
      <b>น้ำหนัก</b> : {{weight}} <br>
      <b>เพศ</b> : {{sex}} <br>
      <b>อายุ</b> : {{age}} <br>
      <hr>
      <h1>bmi</h1>
      <h2>{{bmi}} : {{result}}</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      height: 0,
      weight: 0,
      sex: 'ชาย',
      age: 0
    }
  },
  computed: {
    bmi () {
      const result = this.weight/(this.height/100 * this.height/100)
      if ((this.height/100 * this.height/100) == 0) {
        return 0
      }
      return result.toFixed(2)
    },
    result () {
      if (this.bmi < 18.5) {
        return 'น้ำหนักน้อย'
      } else if (this.bmi < 25) {
        return 'น้ำหนักปกติ'
      } else if (this.bmi < 30) {
        return 'น้ำหนักเกิน'
      } else if (this.bmi < 40) {
        return 'โรคอ้วน'
      }
      return 'เป็นโรคอ้วนรักษายาก'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
