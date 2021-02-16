function hyphenate() {
  let strings = [];
  for (let param of arguments) {
    const strArray = param.split("");
    const hyphenated = strArray
      .map((char, idx) => {
        if (idx === strArray.length - 1) {
          return char;
        }
        return `${char}-`;
      })
      .join("");
    strings.push(hyphenated);
  }
  return strings.join(" ");
}

export default hyphenate;
