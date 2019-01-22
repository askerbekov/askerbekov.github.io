
for (var i = 0; i <= inputFocus.length; i++) {
 let parentInput = inputFocus.parentElement;

 inputFocus[i].addEventListener('input', function() {
 if (this.value.length > 0) {
  parentInput.className.add = "hidden";
  parentInput.className.remove = "visible";
 }
 else {
  parentInput.className.add = "visible";
  parentInput.className.remove = "hidden";
 }
});
 inputFocus[i].addEventListener('change', function() {

 if (this.value.length > 0) {
  inputFocus.className.add = "mistake";
  label.className.add = "hidden";
 }
 else {
  inputFocus.className.add = "good";
  label.className.add = "visible";
 }
});
};