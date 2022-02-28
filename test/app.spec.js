const assert = require('assert');
const {expect} =require('chai')
const {add} = require('../src/app');
const {sub} = require('../src/app');

//add function test
describe('the add function', ()=>{
    it('should add 2 numbers together', ()=>{
       const result = add(-2, 6);
       // assert.equal(result,4);
       expect(result).to.be.eq(4)
    });
    it ('should be able to handle one number', ()=>{
        const result = add(2);
        expect(result).to.be.eq(2);
    });

    it ('should be able to handle a number',()=>{
        const result = add();
        expect(result).to.be.eq(0);
    });
    it ('should resturn 0 if either argument is not a number',() =>{
        const result = add (2, 'test');
        expect(result).to.be.eq(0)
    });

});

//substraction test function 

describe('the sub function', ()=>{
    it('should sub 2 numbers together', ()=>{
       const result = sub(5, 2);
       // assert.equal(result,4);
       expect(result).to.be.eq(3)
    });
    it ('should be able to handle one number', ()=>{
        const result = sub(2);
        expect(result).to.be.eq(2);
    });

    it ('should be able to handle a number',()=>{
        const result = sub();
        expect(result).to.be.eq(0);
    });
    it ('should resturn 0 if either argument is not a number',() =>{
        const result = sub (2, 'test');
        expect(result).to.be.eq(0)
    });

});