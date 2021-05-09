let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let last = document.querySelector(".last");

one.onclick = function () {
  let tl = gsap.timeline();
  tl.to("#one", 1, { opacity: 0 });
  tl.to("#one", 0.75, { height: 0 });
};

two.onclick = function () {
  let tl = gsap.timeline();
  tl.to("#two", 1, { x: 900 });
  tl.to("#two", 0.75, { height: 0 });
};

three.onclick = function () {
  let tl = gsap.timeline();
  tl.to("#three", 2, { rotateY: 100 });
  tl.to("#three", 1, { rotateY: 80 });
  tl.to("#three", 1, { rotateY: 90 });
  tl.to("#three", 0.75, { height: 0 });
};

four.onclick = function () {
  let tl = gsap.timeline();
  tl.to("#four", 1, { rotateX: 100 });
  tl.to("#four", 0.5, { rotateX: 80 });
  tl.to("#four", 0.5, { rotateX: 90 });
  tl.to("#four", 0.75, { height: 0 });
};

five.onclick = function () {
  let b = CSSRulePlugin.getRule("#five:before");
  let a = CSSRulePlugin.getRule("#five:after");
  let tl = gsap.timeline();
  tl.set("#five", { background: "white" });
  tl.set(b, {
    display: "inline-block",
    transformOrigin: "right"
  });
  tl.set(a, {
    display: "inline-block",
    transformOrigin: "left"
  });
  tl.to(b, 1, {
    cssRule: {
      x: -500
    }
  }, 0);
  tl.to(a, 1, {
    cssRule: {
      x: 500
    }
  }, 0);
  tl.to("#five", 0.75, {height: 0});
};

six.onclick = function () {
  let tl = gsap.timeline();
  let parent = document.getElementById("six");
  tl.set("#six", {background: "white"});
  for (let i = 0; i < 10; i++) {
    let span = document.createElement("span");
    span.classList.add("squares")
    parent.append(span);
    span.style.left = i * 10 + "%"; 
    tl.to(span, 0.75, {
      background: "white",
      rotateZ: -45
    }, i * 0.3);
  }
  tl.to("#six", 0.75, {height: 0}, "+=1");
}

seven.onclick = function () {
  let tl = gsap.timeline();
  let d = 0.5, n = 4;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      tl.to("#seven", d, {
        rotateZ: 5
      });
    } else {
      tl.to("#seven", d, {
        rotateZ: -5
      });
    }
  }
  tl.to("#seven", 1, {y: 900});
  tl.to("#seven", 2, {opacity: 0}, d * n);
  tl.to("#seven", 0.75, {height: 0});
}

last.onclick = function () {
  let tl = gsap.timeline();
  tl.set("#last", {
    transformOrigin: "left"
  });
  tl.to("#last", 1, { rotateZ: 100 });
  tl.to("#last", 1, { rotateZ: 80 });
  tl.to("#last", 1, { rotateZ: 90 });
  tl.to("#last", 1, { y: 500 });
  tl.addLabel("fall", "<");
  tl.to("#last", 1, {
    background: "white"
  }, "fall");
};
