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
});

describe("fails", () => {
    test.each(items)("durability and enhancement should decrease according to client's rules", (item) => {
        const result = enhancer.fail(item);
        if (item.enhancement > 16) {
            expect(result.enhancement).toBe(item.enhancement - 1)
        }
        if (item.enhancement < 15) {
            expect(result.durability).toBe(item.durability - 5)
        }
        else {
            expect(result.durability).toBe(item.durability - 10)
        }
    })
});

describe("get", () => {
    test.each(items)("prefix name with enhancement if > 0", (item) => {
        const newName = enhancer.get(item).name
        if (item.enhancement > 0) {
            expect(newName).toBe(`[+${item.enhancement}] ${item.name}`)
        }
        else {
            expect(newName).toBe(item.name);
        }
        
    })
})