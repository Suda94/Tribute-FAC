//current date
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

/////nav opening

menu;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
//nav closing
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
