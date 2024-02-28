function lastPetalsPhrase(numPetals) {
    const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    const lastIndex = (numPetals - 1) % phrases.length;
    return phrases[lastIndex];
}

// Example usage:
const numPetals = 10;
console.log(lastPetalsPhrase(numPetals)); 