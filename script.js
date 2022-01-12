const hashmap = {
  "27AAPFU0939F1ZV": {
    Address: "A-92 Malviya Nagar Jaipur",
    Business: "Apple inc.",
  },
};
const emailtf = document.getElementById("mail");
emailtf.addEventListener("input", (e) => {
  if (
    String(e.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    emailtf.style.border = "4px solid green";
  } else if (e.target.value === "") emailtf.style.border = "2px solid black";
  else emailtf.style.border = "4px solid red";
});
const Gst = document.getElementById("gst");
Gst.addEventListener("input", (e) => {
  if (checksum(e.target.value)) {
    Gst.style.border = "4px solid green";
    const Address = document.getElementById("add");
    Address.value = hashmap[e.target.value]["Address"];
    const business = document.getElementById("yoyo");
    business.value = hashmap[e.target.value]["Business"];
  } else if (e.target.value === "") Gst.style.border = "2px solid black";
  else Gst.style.border = "4px solid red";
});
function checksum(g) {
  let regTest = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test(g);
  if (regTest) {
    let a = 65,
      b = 55,
      c = 36;
    return Array["from"](g).reduce((i, j, k, g) => {
      p =
        (p =
          (j.charCodeAt(0) < a ? parseInt(j) : j.charCodeAt(0) - b) *
          ((k % 2) + 1)) > c
          ? 1 + (p - c)
          : p;
      return k < 14
        ? i + p
        : j == ((c = c - (i % c)) < 10 ? c : String.fromCharCode(c + b));
    }, 0);
  }
  return regTest;
}
const numb = document.getElementById("num");
numb.addEventListener("input", (e) => {
  var IndNum = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;

  if (IndNum.test(e.target.value)) {
    numb.style.border = "4px solid green";
  } else if (e.target.value === "") numb.style.border = "2px solid black";
  else numb.style.border = "4px solid red";
});
