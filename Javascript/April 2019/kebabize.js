function kebabize (str) {
  // return

  return str
    .replace (/[0-9]/g, '')
    .split (/(?=[A-Z])/)
    .join ('-')
    .toLowerCase ();
}
