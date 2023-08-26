var sub_name1 = document.getElementById("sub_name1");
var sub_name2 = document.getElementById("sub_name2");
var sub_name3 = document.getElementById("sub_name3");
var sub_name4 = document.getElementById("sub_name4");
var sub_name5 = document.getElementById("sub_name5");
var sub_name6 = document.getElementById("sub_name6");
var sub_name7 = document.getElementById("sub_name7");
var sub_name8 = document.getElementById("sub_name8");
var sub_name9 = document.getElementById("sub_name9");





var first = {
  sub1: {
    code: "AD8502",
    credit: 5,
  },
  sub2: {
    code: "AD8501",
    credit: 5,
  },
  sub3: {
    code: "BCD456",
    credit: 2,
  },
  sub4: {
    code: "BWC456",
    credit: 6,
  },
  sub5: {
    code: "BCR456",
    credit: 9,
  },
};
var subj=["maths","physics","chemistry"];

for (var propertyName in first) {
  console.log(propertyName);
}

const first_year = document.getElementById("first_year");
const first_even = document.getElementById("even");
const first_odd = document.getElementById("odd");




function handleClick(event) {
  const demo1="first"
  return demo1
}
function handleClick1() {
  const demo2="evene";
  return demo2;
}

first_year.addEventListener("click", handleClick);
first_even.addEventListener("click", handleClick1);

const first_year_demo1=handleClick();
const first_year_demo2=handleClick1();


























// const first_even = document.getElementById("even");
// console.log(first_even)

  // first_even.addEventListener("click", function () {
  //   const demo2 = "even";
  //   sub_name1.innerText=""
  // });


// first_year.addEventListener("click", function () {
//   const odd="odd"
// });

// const first_year = document.getElementById("first_year");
// first_year.addEventListener("click", function (e) {
// Object.keys(first).forEach((key) => {
//   var code = console.log(first[key].code);

//   // here we used dkey as var insted of attribute so we usd bracket
// });
// });

// console.log(Object.keys(first));
// console.log(first);
// console.log(first['sub1'])
