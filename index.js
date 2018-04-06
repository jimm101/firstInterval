module.exports = function firstInterval(f, m, ...p) {
  const h = setInterval(()=>{f.apply(null, p)}, m);
  f.apply(null, p);
  return h;
}
