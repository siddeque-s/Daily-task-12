for (row = 1; row <= 4; row++) {
  let res = "";
  for (col = 1; col <= 4; col++) {
    if (col % 2 == 0) {
      res = res + "# ";
    } else {
      res = res + "* ";
    }
  }
  console.log(res);
}
