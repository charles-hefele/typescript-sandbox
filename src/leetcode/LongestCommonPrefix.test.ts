import {longestCommonPrefix} from "./LongestCommonPrefix";

test('test longestCommonPrefix', () => {
   expect(longestCommonPrefix([""])).toBe("");
   expect(longestCommonPrefix(["item"])).toBe("item");
   expect(longestCommonPrefix(["item", "item"])).toBe("item");
   expect(longestCommonPrefix(["item", "item", "item"])).toBe("item");
   expect(longestCommonPrefix(["item", "items"])).toBe("item")
   expect(longestCommonPrefix(["items", "item"])).toBe("item")
   expect(longestCommonPrefix(["items", "item"])).toBe("item")
   expect(longestCommonPrefix(["sun", "suns", "sunspot"])).toBe("sun")
   expect(longestCommonPrefix(["sun", "sunspot", "suns"])).toBe("sun")
   expect(longestCommonPrefix(["suns", "sun", "sunspot"])).toBe("sun")
   expect(longestCommonPrefix(["suns", "sunspot", "sun"])).toBe("sun")
   expect(longestCommonPrefix(["sunspot", "suns", "sun"])).toBe("sun")
   expect(longestCommonPrefix(["sunspot", "sun", "suns"])).toBe("sun")
   expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
   expect(longestCommonPrefix(["fog", "frame", "fun"])).toBe("f");
   expect(longestCommonPrefix(["items", "item", "item"])).toBe("item");
   expect(longestCommonPrefix(["items", "items", "item"])).toBe("item");
   expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
   expect(longestCommonPrefix(["reflower", "flow", "flight"])).toBe("");
   expect(longestCommonPrefix(["ab", "abc", "abcd"])).toBe("ab");
   expect(longestCommonPrefix(["abc", "abd", "abd"])).toBe("ab");
});
