<template>
  <div class="all">
    <div class="title2">
      <div class="lan" @click="switch_net('lan_mode')">
        <div
            v-show="!isChecked"
            :class="isChecked ? 'animate__backOutRight' : 'animate__flip'"
            class="lan-off animate__animated"
        >
          🐬
        </div>
        <div
            v-show="isChecked"
            :class="isChecked ? 'animate__bounceInDown' : 'animate__zoomOutDown'"
            class="lan-on animate__animated"
        >
          🦈
        </div>
      </div>
      Copyright © 2016-2023
      <a :href="webdata.copyRightLink">{{ webdata.copyRightText }}</a> All
      rights reserved.
    </div>
    <transition
        :duration="{enter:1500,leave:700}"
        :enter-active-class="enterAnimate"
        :leave-active-class="`${outAnimate}`"
        appear
        mode="out-in"
        name="animateAll"
        type="animation"
    >
      <ul
          v-if="!v4v6Checked&&!isChecked"
          key="v4"
          class="switch ul-v4 animate__animated"
      >
        <li v-for="(nav, index) in navList" :key="index" class="switch__box">
          <label>
            <input name="" type="checkbox"/>
            <div class="icon-box" @click="js_open(nav['url'])">
              <img :src="nav['icon']"/>
              <p>{{ nav["desc"] }}</p>
            </div>
          </label>
        </li>
      </ul>
      <ul
          v-if="v4v6Checked&&!isChecked"
          key="v6"
          class="switch ul-v6 animate__animated"
      >
        <li v-for="(nav, index) in navList" :key="index" class="switch__box">
          <label>
            <input name="" type="checkbox"/>
            <div class="icon-box" @click="js_open(nav['url'])">
              <img :src="nav['icon']"/>
              <p>{{ nav["desc"] }}</p>
            </div>
          </label>
        </li>
      </ul>

      <ul
          v-if="isChecked"
          key="lan"
          class="switch ul-lan animate__animated"
      >
        <li v-for="(nav, index) in navList" :key="index" class="switch__box">
          <label>
            <input name="" type="checkbox"/>
            <div class="icon-box" @click="js_open(nav['url'])">
              <img :src="nav['icon']"/>
              <p>{{ nav["desc"] }}</p>
            </div>
          </label>
        </li>
      </ul>
    </transition>
    <div class="colormode font animate__animated animate__backInRight">
      <input id="changeColor" type="checkbox"/>
      <span>🌞</span>
      <span>🌙</span>
    </div>
    <!--    切换v4-v6的按钮  -->
    <div v-show="!isChecked" class="font netmode animate__animated animate__backInLeft" @click="switch_net('v4v6_mode')">
      <input v-model="v4v6Checked" type="checkbox"/>
      <span :class="{ v4box: !isChecked }">6️⃣ V6</span>
      <span :class="{ v6box: isChecked }">4️⃣ V4</span>
    </div>
    <!--    </div>-->
    <div v-show="isChecked" class="lanmode animate__animated animate__zoomIn" @click="switch_net('lan_mode')">内网</div>

    <div class="title animate__animated animate__backInDown">
      <div
          :style="rotateDeg"
          class="info"
          @click="rotate_title"
          @mouseenter="stopTimer"
          @mouseleave="startTimer('title_score')"
      >
        <div class="text-1 text">{{ hitokotodata }}</div>
        <div class="text-2 text">{{ hitokotodata }}</div>
        <div :style="weatehrRotateDeg" class="weather-1 weather">
          <Weather/>
        </div>
        <div class="weather-2 weather">
          <Weather/>
        </div>
        <!-- <div class="text-2 text">{{ webdata.tagTitle }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import Weather from "@/components/Weather";
import "animate.css";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      webTitle: "",
      // 旋转角度
      rotateDeg: {},
      weatehrRotateDeg: {
        transform: "rotateX(-90deg) translateZ(20px) translateX(-50%)",
      },
      clickTime: 1,
      // 触发器
      timer: null,
      //一言触发器
      hitokoTimer: null,
      //  v4-v6复选框
      v4v6Checked: false,
      //  lan复选框checked属性
      isChecked: false,
      //  进入动画列表
      enterAnimatesList: [
        "animate__backInDown",
        "animate__backInLeft",
        "animate__bounceInDown",
        "animate__bounceInUp",
        "animate__fadeInDown",
        "animate__rotateIn",
        "animate__zoomInDown",
        "animate__zoomInLeft",
        "animate__jackInTheBox"
      ],
      //  跳出动画列表
      outAnimatesList: [
        "animate__backOutDown",
        "animate__backOutRight",
        "animate__fadeOutTopRight",
        "animate__flipOutY",
        "animate__rotateOut",
        "animate__hinge",
        "animate__rollOut",
        "animate__zoomOutDown",
        "animate__zoomOutRight",

      ],
      //  随机进入动画
      enterAnimate: "",
      //  随机跳出动画
      outAnimate: "",
    };
  },
  mounted() {
    this.startTimer("title_score");
    this.startTimer("hitokoto")

  },
  beforeMount() {
    this.get_random_animate();
  },
  methods: {
    // 派发action获取对应列表数据
    get_webdata(type) {
      this.$store.dispatch("getData", type)
          .then()
          .catch(err => {
            console.log(err);
          })
    },
    // 调转站点
    js_open(host) {
      window.open(host, "_blank");
    },
    //  旋转title
    rotate_title() {
      this.clickTime += 1;
      if (this.clickTime % 4 === 0 || this.clickTime % 4 === 1) {
        this.weatehrRotateDeg = {
          transform: "rotateX(90deg) translateZ(20px) translateX(-50%)",
        };
      } else {
        this.weatehrRotateDeg = {
          transform: "rotateX(-90deg) translateZ(20px) translateX(-50%)",
        };
      }
      this.rotateDeg = {
        transform: `rotatex(${(this.clickTime - 1) * 90}deg)`,
      };
    },
    // 定时触发 旋转方法
    startTimer(name) {
      // 定时翻转标题
      if (name === "title_score") {
        this.timer = setInterval(this.rotate_title, 3000);
      } else if (name === "hitokoto") {
        //定时获取hitokoto
        this.hitokoTimer = setInterval(this.get_hitokoto, 6000);
      }
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    switch_net(netType) {
      if (netType === "lan_mode") {
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
          this.get_webdata("lan");
        } else {
          if (this.v4v6Checked) {
            this.get_webdata("v6");
          } else {
            this.get_webdata("v4");
          }
        }
      }else if (netType==="v4v6_mode"){
        this.v4v6Checked = !this.v4v6Checked;
        if (this.v4v6Checked) {
          this.get_webdata("v6");
        } else {
          this.get_webdata("v4");
        }
      }
      this.get_random_animate()
    },
    //  获取随机动画
    get_random_animate() {
      // 进入动画的随机
      const randomIndexEnter = Math.floor(Math.random() * this.enterAnimatesList.length);
      this.enterAnimate = this.enterAnimatesList[randomIndexEnter];
      //  跳出动画的随机
      const randomIndexOut = Math.floor(Math.random() * this.outAnimatesList.length);
      this.outAnimate = this.outAnimatesList[randomIndexOut];
    },
    //  派发action获取一言
    get_hitokoto() {
      this.$store.dispatch("getHitokotoData");
    }
  },
  computed: {
    ...mapGetters(["navList"]),
    ...mapState({
      webdata: (state) => state.home.webData,
      hitokotodata: (state) => state.home.Hitokoto
    }),
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.hitokoTimer);
  },
  components: {
    Weather,
  },
};
</script>

<style scoped>

/* 隐藏点击显示的蓝色盒子 */
*:focus {
  outline: none;
}

/* 隐藏点击显示的蓝色盒子 */
* {
  -webkit-tap-highlight-color: transparent;
  -moz-tap-highlight-color: transparent;
  -ms-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
}


/*.title {*/
/*  !*overflow: hidden;*!*/
/*  !*position: relative;*!*/
/*}*/

.info {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*display: flex;*/
  cursor: pointer;
  transition: all 1s;
  transform-style: preserve-3d;
}

/*.info:hover{*/
/*  transform: rotateX(90deg);*/
/*}*/

.info .text,
.info .weather {
  line-height: 50px;
  position: absolute;
  top: 0;
  left: 50%;
  text-align: center;
  backface-visibility: hidden;
  /*background-color: #e0e0e0;*/
}

.info .text-1 {
  overflow: hidden;
  width: 100%;
  transform: translateZ(20px) translateX(-50%);
  white-space: nowrap; /* 防止内容换行 */
  /* transform: translateZ(20px) translateX(-50%); */
  text-overflow: ellipsis; /* 超出部分以省略号显示 */
}

.info .text-2 {
  overflow: hidden;
  width: 100%;
  transform: rotateX(180deg) translateZ(20px) translateX(-50%);
  white-space: nowrap; /* 防止内容换行 */
  /* transform: translateZ(20px) translateX(-50%); */
  text-overflow: ellipsis; /* 超出部分以省略号显示 */
}

/*切换内网*/
.title2 .lan {
  /*position: relative;*/
  font-size: 30px;
  width: auto;
  margin-bottom: 20px;
  cursor: pointer;
}

/*内网切外网*/
.lanmode {
  font-size: 20px;
  line-height: 30px;
  position: absolute;
  top: 20px;
  left: 40px;
  width: 80px;
  height: 30px;
  margin-bottom: 20px;
  margin-left: 0;
  cursor: pointer;
  text-align: center;
  color: #225780;
  border-radius: 40px;
  background: linear-gradient(90deg, #fef63c, #40ac7f);
  perspective: 200px;
}

.fade-leave-active {
  animation-duration: 0.5s;
}

</style>