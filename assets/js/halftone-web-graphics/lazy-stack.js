var lazystack = [].slice.call(document.querySelectorAll("img.lazy-stack"));
lazystack.onclick = lazystackload;
function lazystackload() {
  lazystack.forEach(function(lazyhwg) {
    lazyhwg.onload = function(){
      lazyhwg.classList.add("loaded");
      lazyhwg.classList.remove("lazy");
    };
    if (lazyhwg.dataset.srcset) {
      lazyhwg.srcset = lazyhwg.dataset.srcset;
    };
    lazyhwg.src = lazyhwg.dataset.src;
  });
};
