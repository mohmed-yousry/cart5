// img.setAttribute("loading", "lazy");
let allImg = Array.from(document.querySelectorAll("img")) ; 


// navbar
// doropMobile
let allDrop2 = Array.from(document.querySelectorAll(".drop-mobile"));
allDrop2.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.children[0].classList.contains("icon-angle-down")) {
      e.children[0].classList.remove("icon-angle-down");
      e.children[0].classList.add("icon-ctrl");
    } else {
      e.children[0].classList.add("icon-angle-down");
      e.children[0].classList.remove("icon-ctrl");
    }
    e.children[1].classList.toggle("hidden");
  });
});
// doropMobile
// dowopdesktop
const allSection = Array.from(document.querySelectorAll(".basic"));
const allDrowpDown = Array.from(document.querySelectorAll(".dowpdesktop"));
allDrowpDown.forEach((e) => {
  e.addEventListener("click", () => {
    allDrowpDown.forEach((k) => {
      k.children[1].classList.add("hidden");
    });
    e.children[1].classList.remove("hidden");
  });
});

allSection.forEach((e) => {
  e.addEventListener("click", () => {
    allDrowpDown.forEach((e) => {
      e.children[1].classList.add("hidden");
    });
  });
});
// dowopdesktop

// togle
document.querySelector(".togle").addEventListener("click", () => {
  document.querySelector(".nav-mobile").classList.remove("hidden");
  document.querySelector(".nav-mobile .overlay").classList.remove("hidden");
});

document.querySelector(".close-mobile-nav").addEventListener("click", () => {
  document.querySelector(".nav-mobile").classList.add("hidden");
  document.querySelector(".nav-mobile .overlay").classList.add("hidden");
});

document.querySelector(".nav-mobile .overlay").addEventListener("click", () => {
  document.querySelector(".nav-mobile").classList.add("hidden");
  document.querySelector(".nav-mobile .overlay").classList.add("hidden");
});

// navbar
let allDrop = Array.from(document.querySelectorAll(".dropdown"));
allDrop.forEach((e) => {
  e.addEventListener("click", () => {
    e.children[1].classList.toggle("hidden");
  });
});

// console.log(document.querySelector("html").getAttribute("dir"))

//select box

// var x, i, j, l, ll, selElmnt, a, b, c;
// /*look for any elements with the class "custom-select":*/
// x = document.getElementsByClassName("custom-select");
// l = x.length;
// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   /*for each element, create a new DIV that will act as the selected item:*/
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");

//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

//   if (document.querySelector("html").getAttribute("dir") == "rtl") {
//     a.classList.add("right");
//     console.log();
//   } else {
//     a.classList.add("left");
//   }

//   x[i].appendChild(a);
//   /*for each element, create a new DIV that will contain the option list:*/
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     /*for each option in the original select element,
//     create a new DIV that will act as an option item:*/
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     console.log(selElmnt.options[j].value)
//     c.setAttribute("value" , `${selElmnt.options[j].value}`)
//     c.addEventListener("click", function (e) {
//       /*when an item is clicked, update the original select box,
//         and the selected item:*/
//       var y, i, k, s, h, sl, yl;
//       s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//       sl = s.length;
//       h = this.parentNode.previousSibling;
//       for (i = 0; i < sl; i++) {
//         if (s.options[i].innerHTML == this.innerHTML) {
//           s.selectedIndex = i;
//           h.innerHTML = this.innerHTML;
//           y = this.parentNode.getElementsByClassName("same-as-selected");
//           yl = y.length;
//           for (k = 0; k < yl; k++) {
//             y[k].removeAttribute("class");
//           }
//           this.setAttribute("class", "same-as-selected");
//           break;
//         }
//       }
//       h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function (e) {
//     /*when the select box is clicked, close any other select boxes,
//       and open/close the current select box:*/
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }
// function closeAllSelect(elmnt) {
//   /*a function that will close all select boxes in the document,
//   except the current select box:*/
//   var x,
//     y,
//     i,
//     xl,
//     yl,
//     arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i);
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
//select box
// section-videos
const allPlayerVaideos = Array.from(document.querySelectorAll(".video-player"));
allPlayerVaideos.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.parentElement.parentElement.children[0].style.zIndex = `5` ;
    e.parentElement.parentElement.remove();

  });
});
// section-videos



