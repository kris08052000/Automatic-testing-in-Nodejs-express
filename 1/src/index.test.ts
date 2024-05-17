import {describe , expect, test, it} from "@jest/globals";
import {sum, multiply} from "./index";

describe('sum module', () => { 
    it('add 1 + 2 equals 3 ', ()=>{
        expect(sum(1,2)).toBe(3);
    })
    it('add -3 + -5 equals -8 ', ()=>{
        expect(sum(-3,-5)).toBe(-8);
    })
    it('add 5 + 8 equals 13 ', ()=>{
        expect(sum(5, 8)).toBe(13);
    })
 })

 describe('multiply module', () => { 
    it('multiply 1 * 2 equals 2 ', ()=>{
        expect(multiply(1,2)).toBe(2);
    })
    it('multiply 3 * 5 equals 15 ', ()=>{
        expect(multiply(3,5)).toBe(15);
    })
    it('multiply 5 * 8 equals 40 ', ()=>{
        expect(multiply(5, 8)).toBe(40);
    })
 })