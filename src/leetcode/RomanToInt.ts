export function romanToInt(s: string): number {
    let map = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 10000]
    ])
    let val = 0

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i)

        // if it's an I, check if there is a V or X after, and if so, apply special rule
        if (char === 'I') {
            let after = s.charAt(i + 1)
            if (after === 'V') {
                val += 4
                // skip index ahead
                i += 1
            } else if (after === 'X') {
                val += 9
                // skip index ahead
                i += 1
            } else {
                val += map.get(char)
            }

        // if it's an X, check if there is a L or C after, and if so, apply special rule
        } else if (char === 'X') {
            let after = s.charAt(i + 1)
            if (after === 'L') {
                val += 40
                // skip index ahead
                i += 1
            } else if (after === 'C') {
                val += 90
                // skip index ahead
                i += 1
            } else {
                val += map.get(char)
            }

        // if it's a C, check if there is a D or M after, and if so, apply special rule
        } else if (char === 'C') {
            let after = s.charAt(i + 1)
            if (after === 'D') {
                val += 400
                // skip index ahead
                i += 1
            } else if (after === 'M') {
                val += 900
                // skip index ahead
                i += 1
            } else {
                val += map.get(char)
            }

        // if there is no special case, just add the value
        } else {
            val += map.get(char)
        }
    }
    return val
}