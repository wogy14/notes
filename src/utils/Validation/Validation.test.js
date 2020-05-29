import React from 'react';
import { shallow } from 'enzyme';
import Validation from './Validation';

const wrapped = new Validation();

describe('Validation', () => {
    it('correct email validation', () => {
        expect(wrapped.checkEmail('invalidEmail')).toEqual(false);
        expect(wrapped.checkEmail('validEmail@gmail.com')).toEqual(true);
    });
    it('correct empty validation', () => {
        expect(wrapped.isEmpty('')).toEqual(true);
        expect(wrapped.isEmpty('dfsdffds')).toEqual(false);
    });
    it('correct max length validation', () => {
        expect(wrapped.checkMaxLength('1234',3)).toEqual(false);
        expect(wrapped.checkMaxLength('123',4)).toEqual(true);
    });
    it('correct max length validation', () => {
        expect(wrapped.checkMinLength('1',3)).toEqual(false);
        expect(wrapped.checkMinLength('12345',4)).toEqual(true);
    });
    it('correct password validation', () => {
        expect(wrapped.checkPasswordSymbols('wwwww')).toEqual(true);
        expect(wrapped.checkPasswordSymbols('/dsdsdsds')).toEqual(false);
    });
    it('correct minimum number', () => {
        expect(wrapped.checkMinNumber(10,1)).toEqual(true);
        expect(wrapped.checkMinNumber(10,11)).toEqual(false);
    });
    it('correct max number', () => {
        expect(wrapped.checkMaxNumber(10,11)).toEqual(true);
        expect(wrapped.checkMaxNumber(10,5)).toEqual(false);
    });
    it('correct minimum letters in upper case', () => {
        expect(wrapped.checkMinCountUpperCase('GGGGGGpdf',2)).toEqual(true);
        expect(wrapped.checkMinCountUpperCase('gsdsdsd',1)).toEqual(false);
    });
    it('correct minimum letters in lower case', () => {
        expect(wrapped.checkMinCountLowerCase('GGGGGGpdf',2)).toEqual(true);
        expect(wrapped.checkMinCountLowerCase('AAAAAA',1)).toEqual(false);
    });
    it('correct minimum count of digits', () => {
        expect(wrapped.checkMinCountDigits('GGGGGGpdf20',2)).toEqual(true);
        expect(wrapped.checkMinCountDigits('AAAAAA',1)).toEqual(false);
    });
});
