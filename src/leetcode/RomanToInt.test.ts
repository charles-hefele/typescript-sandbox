import {romanToInt} from "./RomanToInt";

test('test romanToInt', () => {
    expect(romanToInt('I')).toBe(1)
    expect(romanToInt('II')).toBe(2)
    expect(romanToInt('III')).toBe(3)
    expect(romanToInt('IV')).toBe(4)
    expect(romanToInt('V')).toBe(5)
    expect(romanToInt('VI')).toBe(6)
    expect(romanToInt('VII')).toBe(7)
    expect(romanToInt('VIII')).toBe(8)
    expect(romanToInt('IX')).toBe(9)
    expect(romanToInt('X')).toBe(10)
    expect(romanToInt('XI')).toBe(11)
    expect(romanToInt('XII')).toBe(12)
    expect(romanToInt('XIII')).toBe(13)
    expect(romanToInt('XIV')).toBe(14)
    expect(romanToInt('LIV')).toBe(54)
    expect(romanToInt('LVIII')).toBe(58)
    expect(romanToInt('MCMXCIV')).toBe(1994)
});
