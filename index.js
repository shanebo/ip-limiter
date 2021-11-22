const store = {};

module.exports = ({ window = 10000, limit = 30 } = {}) => {
  return (req, res, next) => {
    const { ip } = req;
    const now = Date.now();
    const startOfWindow = now - window;

    if (!store[ip]) {
      store[ip] = [];
    }

    store[ip].push(now);

    const visitsInWindow = store[ip].filter(date => date >= startOfWindow);
    store[ip] = visitsInWindow;

    visitsInWindow.length > limit
      ? res.status(429).end('Too many requests')
      : next();
  }
}
