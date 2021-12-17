const {caluclateISBNChecksum, checkISBN} = require('./check-isbn');

describe("isbn validator", () => {
    it("should return an error message", () => {
        expect(caluclateISBNChecksum('')).toEqual(new Error("You didn't enter any value!"));
    })

    it("should return a checksum", () => {
        expect(caluclateISBNChecksum('007462542X')).toBe(176)
    })

    it("should return a checksum", () => {
        expect(caluclateISBNChecksum('007462545')).toBe(162)
    })

}) 