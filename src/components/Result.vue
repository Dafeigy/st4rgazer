<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  }

});
</script>

<template>
    <div class="result flex items-center text-white bg-second w-[98%] h-[30%] my-1 rounded-md border-border border-1 font-display">
        <div class="avatar w-[10%] aspect-square ml-[3%] rounded-full bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% border-4 border-border">
            <img :src="item.avatar_url" alt="" srcset="" class="rounded-full">
        </div>
        <div class="info flex flex-col text-theme w-[75%] ml-[2%] h-full">
            <div class="repo mx-2 mt-2 h-[70%] flex flex-col justify-top">
                <div>
                    <div class="title text-[1.8vmin] w-full h-[40%]"><a :href="item.clone_url" target="_blank">{{ item.reponame }}</a></div>
                    <div class="desc w-full h-[60%] text-wrap line-clamp-2 text-white text-[1.2vmin] mt-0.5">{{ item.desc }}</div>
                </div>
            </div>
            <div class="stats flex mx-2 text-[1.4vmin] h-[30%] items-center">
                <svg class="starlogo text-[#40E0D0]" aria-label="stars" role="img" height="80%" fill="currentColor" viewBox="0 0 16 16" version="1.1" width="3%"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>
                    <div class="stars text-white mx-[0.5%] text-[1.2vmin]">{{ item.star_count }}</div>
                <svg class="forklogo text-[#40E0D0]" aria-label="forks" role="img" height="80%" fill="currentColor" viewBox="0 0 16 16" version="1.1" width="3%"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg>
                    <div class="forks text-white mx-[0.5%] text-[1.2vmin]">{{ item.fork_count }}</div>
                <svg class='langlogo text-[#40E0D0]' fill="currentColor" height="80%" viewBox="0 0 24 24" width="3%" xmlns="http://www.w3.org/2000/svg"><path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="currentColor"/><path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="currentColor"/><path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="currentColor"/></svg>
                    <div class="lang text-white mx-[0.5%] text-[1.2vmin]">{{ item.lang }}</div>
                <!-- <svg class='scorelogo text-[#40E0D0]' fill="currentColor" height="80%" viewBox="0 0 24 24" width="3%" xmlns="http://www.w3.org/2000/svg"><path d="M5.6361 20.364C4.00738 18.7353 3 16.4853 3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14C21 16.4853 19.9926 18.7353 18.364 20.3639L19.7782 21.7782C21.7688 19.7875 23 17.0376 23 14C23 7.92487 18.0751 3 12 3C5.92487 3 1 7.92487 1 14C1 17.0376 2.23124 19.7876 4.22189 21.7782L5.6361 20.364Z" fill="currentColor"/><path d="M16.9498 18.9497C18.2165 17.683 19 15.933 19 14C19 10.134 15.866 7 12 7C8.13401 7 5 10.134 5 14C5 15.933 5.78353 17.6831 7.05031 18.9498L8.46453 17.5356C7.55967 16.6308 7 15.3807 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14C17 15.3807 16.4404 16.6307 15.5356 17.5355L16.9498 18.9497Z" fill="currentColor"/><path d="M14.1213 16.1213C14.6642 15.5784 15 14.8284 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 14.8285 9.33581 15.5785 9.87874 16.1214L11.293 14.7072C11.112 14.5262 11 14.2762 11 14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14C13 14.2761 12.8881 14.5261 12.7071 14.7071L14.1213 16.1213Z" fill="currentColor"/></svg>
                    <div class="score text-white mx-[0.5%]">{{ item.update_date }}</div> -->
                <svg class='simlogo text-[#40E0D0]' fill="currentColor" height="80%" viewBox="0 0 24 24" width="3%" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5 5H15V9H19V19H9V15H5V5ZM7 7H13V9H9V13H7V7ZM11 17H17V11H15V15H11V17ZM13 11H11V13H13V11Z" fill="currentColor" fill-rule="evenodd"/></svg>
                    <div class="sim text-white text-[1.2vmin]">Scores:</div><div class="text-[salmon] text-[1.2vmin]">{{ item.star_count }}</div>
            </div>
        </div>
        <div class="cursor-pointer link bg-primary transition duration-200 linear hover:bg-theme  w-[10%] h-full flex justify-center items-center text-[#fff] rounded-sm">
            <a :href="item.clone_url" target="_blank"><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z" fill="currentColor"/><path d="M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z" fill="currentColor"/></svg></a>
        </div>
    </div>
</template>