function christmasTree(height) {
  const width = height * 2 - 1;
  const resultFloors = [];
  for (let floor = 1; floor <= height; floor++) {
    const stars = floor * 2 - 1;
    const spaces = (width - stars) / 2;
    const str = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
    resultFloors.push(str);
  }
  return resultFloors.join('\n');
}

module.exports = christmasTree;
