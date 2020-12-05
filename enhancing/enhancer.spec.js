const enhancer = require('./enhancer.js');
//name, durability, enhancement
// test away!
const items = [
    { name: "test0", durability: 30, enhancement: 3 },
    { name: "test1", durability: 50, enhancement: 0 },
    { name: "test2", durability: 100, enhancement: 20 }
]
describe("repair", () => {
    test.each(items)("should set durability to 100", (item) => {
      expect(enhancer.repair(item).durability).toBe(100);
    });
});

describe("success", () => {
    test.each(items)("should increase enhancement by one while if enhancement is less than 20", (item) => {
        if (item.enhancement < 20) {
            expect(enhancer.success(item).enhancement).toBe(item.enhancement + 1);
        }
        else {
            expect(enhancer.success(item).enhancement).toBe(20);
        }
        
    })
})

