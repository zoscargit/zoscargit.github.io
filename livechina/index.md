---
title: 
date: 2020-08-10 22:40:08
---

{% raw %}

<div id="app" class="broadcast">
  <div>点播流地址:
    <input type="text"
           @keyup.enter="selectInput()"
           ref="inputVideoSrc"
           placeholder="比如：http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"/>
  </div>
  <div>景区直播:
    <button @click="selectLive()">全景中国</button>
    <button @click="selectYYQ()">月牙泉</button>
    <button @click="selectZY()">张掖</button>
    <button @click="selectEMS()">峨眉山</button>
  </div>
  <div style="background-color: crimson">央视直播:
    <button @click="selectCCTV13()">CCTV新闻</button>
    <button @click="selectCCTV1()">CCTV1</button>
    <button @click="selectCCTV3()">CCTV3</button>
    <button @click="selectCCTV6()">CCTV6</button>
  </div>
  <!-- 去掉自动播放的属性 autoplay -->
  <div class="videoBox">视频
    <video id="myVideo"
           class="video-js vjs-default-skin vjs-big-play-centered"
           preload="auto"
           autoplay
           controls
           data-setup={}>
      <source src="https://gcalic.v.myalicdn.com/gc/wgw05_1/index.m3u8">
    </video>
  </div>
  <div style="background-color: crimson">视频后</div>
</div>
<script>
    let app = new Vue({
        el: "#app",
        data: {
            videoSrc: '',
            videoPlayer: undefined
        },
        created() {
            //自动加载方法
            console.log("created");
            console.log(this.videoPlayer);
        },
        mounted: function () {
            //自动加载方法
            console.log("mounted");
            this.initVideo();
            console.log(this.videoPlayer);
        },
        methods: {
            initVideo() {
                this.videoPlayer = videojs('myVideo', {fluid: true});
            },
            playVideo() {
                // console.log(this.videoPlayer);
                // console.log(this.videoSrc);
                this.videoPlayer.src({
                    src: this.videoSrc,
                });
                this.videoPlayer.play();
            },
            selectInput() {
                this.videoSrc = this.$refs.inputVideoSrc.value;
                this.playVideo();
            },
            selectLive() {
                this.videoSrc = "https://gcalic.v.myalicdn.com/gc/wgw05_1/index.m3u8";
                this.playVideo();
            },
            selectYYQ() {
                this.videoSrc = "https://gctxyc.liveplay.myqcloud.com/gc/dhyyqst_1_md.m3u8";
                this.playVideo();
            },
            selectZY() {
                this.videoSrc = "https://gccncc.v.wscdns.com/gc/zyqcdx01_1/index.m3u8";
                this.playVideo();
            },
            selectEMS() {
                this.videoSrc = "https://gcksc.v.kcdnvip.com/gc/emsarm_1/index.m3u8";
                this.playVideo();
            },
            selectCCTV13() {
                this.videoSrc = "http://ivi.bupt.edu.cn/hls/cctv13.m3u8";
                // console.log("cctv13");
                this.playVideo();
            },
            selectCCTV1() {
                this.videoSrc = "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8";
                this.playVideo();
            },
            selectCCTV3() {
                this.videoSrc = "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8";
                this.playVideo();
            },
            selectCCTV6() {
                this.videoSrc = "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8";
                this.playVideo();
            },
        },
    });
</script>

{% endraw %}