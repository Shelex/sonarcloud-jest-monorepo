const fn = val => {
  console.log(val)
  return typeof val === 'string' ? val : String(val)
};

const fn1 = val => {
  const x = fn(val)
  return x
};
const fn2 = val => {
  const x = fn(val)
  return x
};
const fn3 = val => {
  const x = fn(val)
  return x
};
const fn4 = val => {
  const x = fn(val)
  return x
};
const fn5 = val => {
  const x = fn(val)
  return x
};
const fn6 = val => {
  const x = fn(val)
  return x
};
const fn7 = val => {
  const x = fn(val)
  return x
};

module.exports = {
  fn1,
  fn2,
  fn3,
  fn4,
  fn5,
  fn6,
  fn7
};