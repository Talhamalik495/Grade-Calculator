let grade = +prompt("Your percentage")
if (grade > 100) {
    document.write("1 sa 100 tak number ha")

}
else if (grade > 80 && grade <= 100) {
    document.write(" Grade your A+")
}
else if (grade > 70 && grade <= 80) {
    document.write("Grade your A")
}
else if (grade > 60 && grade <= 70) {
    document.write("Grade yourB")
}
else if (grade > 50 && grade <= 60) {
    document.write("Grade yourC")
}
else if (grade > 40 && grade <= 50) {
    document.write("Grade yourD")
}
else {
    document.write("Grade yourFail")
}
