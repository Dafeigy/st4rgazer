<script setup>
import Result from './components/Result.vue'
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.min.css"
import { onMounted, onUpdated, ref } from "vue";
onUpdated(() => {
    Prism.highlightAll(); //修改内容后重新渲染
});
onMounted(() => {
    Prism.highlightAll(); //切换菜单重新渲染
})
const searchThreshold = ref(0.75);

const data = ref(null);

const fetchData = async () => {
  try {
    
    const response = await fetch('https://gs.cybercolyce.icu/test_search');
    const result = await response.json();
    data.value = result;
    console.log(data.value)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
</script>

<template>

  <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
  <div id="sidebar" class="flex flex-col bg-primary w-[30vmin] h-full mx-2 font-display">
    <div id="logo"
      class="flex w-full flex-col items-center justify-center text-center text-white font-display text-[4vmin] h-[5%] mt-2">
      [ DEBUG ]
    </div>

    <div id="constructing" class="flex flex-col justify-center h-[95%] w-full items-center">
      <div id="debug" class="mt-[3%] font-display h-[80%] bg-second w-full overflow-scroll whitespace-nowrap language-javascript rounded-xl" style="scrollbar-color: transparent transparent; word-wrap: break-word;">
        <pre><code>// This is a debug window</code>
<code>var a=1; var a=1; var a=1; var a=1; var a=1; var a=1;</code></pre>
        <pre>
<code>// Searching with @0.86</code>
        </pre>
      </div>
      <div id="others" class="font-display pt-4 h-[20%] w-full flex flex-col justify-center items-center">
        <h2 class="font-display text-white text-[3vmin] text-center">[ Settings ]</h2>
        <div class="flex text-white ">
          <div class="text-nowrap">Sim Threadhold:</div>
          <div id="threshold" class="ml-2 text-theme" >{{ searchThreshold }}</div>
        </div>
        <input type="range" min="0.5" max="0.9" step="0.01" class="w-[70%] justify-center my-4" v-model="searchThreshold">
      </div>
    </div>
  </div>
  <div id="main"
    class="bg-second w-[calc(100%-30vmin)] flex flex-col items-center h-[98%] justify-top rounded-2xl pt-[8%]">
    <h1 class="text-4xl font-display text-[#fff] text-nowrap">✨Which star to gaze today?</h1>
    <div id="author"
      class="font-display rounded-lg h-[5%] w-[80vmin] text-md flex justify-center items-center bg-primary mt-[0.5%] text-white">
      <div class="text-[1.5vmin] text-center items-center flex justify-center">Maybe made by<a href="" class="text-theme">&nbsp;@NUL4I </a>&nbsp;with:
        [&nbsp;
        <a href="" class="hover:-translate-y-1 hover:scale-120 transition duration-200 delay-50"><i class="devicon-fastapi-plain colored"></i></a>&nbsp;+&nbsp;
        <a href="" class="hover:-translate-y-1 hover:scale-120 transition duration-200 delay-50"><i class="devicon-vuejs-plain colored"></i></a>&nbsp;+&nbsp;
        <a href="" class="hover:-translate-y-1 hover:scale-120 transition duration-200 delay-50"><i class="devicon-c-plain colored"></i></a>&nbsp;+&nbsp;
        <a href="" class="hover:-translate-y-1 hover:scale-120 transition duration-200 delay-50"><i class="devicon-tailwindcss-original colored"></i></a>&nbsp;+&nbsp;
        <a href="" class="hover:-translate-y-1 hover:scale-120 transition duration-200 delay-50"><i class="devicon-wasm-original colored"></i></a>&nbsp;+&nbsp;
        <a href="" class="hover:-translate-y-1 hover:scale-120 transition duration-200 delay-50"><i class="devicon-github-original"></i></a>&nbsp;], deployed in <a href="">&nbsp;<i
            class="devicon-vercel-original"></i>Vercel</a>
      </div>
    </div>
    <div id="searchwindow"
      class="w-[80vmin] h-[20%] text-[#fff] border-2 border-white rounded-md flex flex-col justify-center items-center mt-[0.5%]">
      <form action="" class="w-[99%] h-[70%] flex flex-col outline-none border-none userselect-none font-xl">
        <label for="query"></label>
        <textarea name="query" id="query" placeholder="Describe your starred repo:" minlength="6" maxlength="100"
          autocomplete="off"
          class="font-display resize-none border-none w-full h-full select-none scroll-none p-4 font-sm focus:outline-0 bg-second"></textarea>
      </form>
      <div id="control" class=" w-full h-[25%] mt-[0.5%] px-2 text-white font-display text-[1.3vmin] flex justify-center items-center ">
        <div id="settings" class="w-[90%] flex items-center h-full">
          <button id="Sync" class="btn cursor-pointer bg-second h-[90%] w-[12%] flex items-center justify-center text-center rounded-lg hover:bg-primary transition delay-50 duration-300 ease-in-out">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.56079 10.6418L6.35394 3.94971L8.25402 5.84979C11.7312 3.6588 16.3814 4.07764 19.41 7.1063L17.9958 8.52052C15.7536 6.27827 12.3686 5.87519 9.71551 7.31128L11.2529 8.84869L4.56079 10.6418Z"
                fill="currentColor" />
              <path
                d="M19.4392 13.3581L17.646 20.0502L15.7459 18.1501C12.2688 20.3411 7.61857 19.9223 4.58991 16.8936L6.00413 15.4794C8.24638 17.7217 11.6313 18.1247 14.2844 16.6887L12.747 15.1512L19.4392 13.3581Z"
                fill="currentColor" />
            </svg>Sync
          </button>
          <div id="loader" class="flex justify-center w-[3vmin] items-center">
            <div id="loading"  class="w-[1.5vmin] h-[1.5vmin] rounded-full border-[0.3vmin] border-[#3CB371]"></div>
            <!-- <div id="success" class="w-[1.5vmin] h-[1.5vmin] border-t-transparent rounded-full border-[0.3vmin] border-[#d9ab2d] animate-circle"></div> -->
            <!-- <div id="error" class="w-[1.5vmin] h-[1.5vmin] rounded-full border-[0.3vmin] border-[salmon]"></div> -->
          </div>
          <div id="status" class="items-center justify-center">&leftarrow;Sync First</div>
        </div>
        <div id="search" class="flex flex-col items-center w-[10%] h-full justify-right">
          <div @click="fetchData" id="searchbtn" class="cursor-pointer btn flex h-[90%] items-center w-full justify-center bg-primary transition delay-50 duration-300 ease-in-out hover:bg-theme rounded-md hover:text-[#fff]">search</div>
        </div>
      </div>
    </div>
    <div id="results" class=" overflow-scroll scrollbar-color-[#3CB371] flex flex-col w-[80vmin] h-[50%] justify-top items-center py-1 my-2" style="scrollbar-color: transparent transparent; overflow-x: hidden;">
      <Result v-for="each in data" :key="each.reponame" :item="each"/>
      <Result v-for="each in data" :key="each.reponame" :item="each"/>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  pre{
    background: none; 
    overflow: scroll;
  }
</style>
