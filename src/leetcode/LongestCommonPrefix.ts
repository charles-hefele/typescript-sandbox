export function longestCommonPrefix(strs: string[]): string {
    // init prefix
    let prefix = strs[0];

    // early exit if prefix is empty
    if (prefix == "") {
        return "";
    }

    // iterate over each word and check to see if any or all of the current longest prefix matches and then adjust
    for (let i = 1; i < strs.length; i++) {
        let current = strs[i];
        for (let j = 1; j <= prefix.length; j++) {
            if (prefix.substring(0, j) != current.substring(0, j)) {
                prefix = prefix.substring(0, j-1);

                // return if prefix ever drops to empty
                if (prefix == "") {
                    return "";
                }

                // break out of the loop if prefix is not empty
                break;
            }
        }
    }

    return prefix;
}
