const { doubleNumbers } = require('./arrayUtility');


describe('Array Utilities', () => {

    describe('Triple Numbers', () => {
        it('should return -1 when the input is not an array', () => {

            expect(() => doubleNumbers('a')).toThrow('input is not an array');

        });

        it('should triple elements when the input is an array', () => {
            const result = doubleNumbers([1, 2, 3, 4, 5]);
            expect(result).toEqual([3, 6, 9, 12, 15]);

        });


    })



})
