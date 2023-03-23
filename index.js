let welcome;
let date = new Date(), month = date.getMonth();
if (month <= 2 && month < 5) {
    welcome = "It's Summer Seasons";
} else if (month <= 6 && month < 9) {
    welcome = "It's Fall Seasons";
} else {
    welcome = "It's Winter Seasons";
}
document.write("<h1>" + welcome);