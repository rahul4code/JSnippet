class MyCache {
  constructor() {
    this.key = "";
    this.value = "";
    this.ttl = "";
    this.cacheList = [];
  }

  set(key, value, ttl) {
    let obj = {
      [key]: value,
      ttl: ttl,
    };

    this.cacheList.push(obj);
  }

  get(key) {
    const obj = this.cacheList.find((i) => {
      if (i[key]) {
        return i;
      }
    });
    return obj;
  }
}

const cache = new MyCache();
cache.set("a", 5, 15000);
