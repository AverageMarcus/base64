document.getElementById("encoded").addEventListener("change", function() {
  try {
    document.getElementById("decoded").value = atob(this.value);
  } catch (ex) {
    document.getElementById("decoded").value = "⚠️ INVALID!!!"
  }
});
document.getElementById("decoded").addEventListener("change", function() {
  try {
    document.getElementById("encoded").value = btoa(this.value);
  } catch (ex) {
    document.getElementById("decoded").value = "⚠️ INVALID!!!"
  }
});
