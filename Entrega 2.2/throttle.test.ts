import { throttle } from './throttle';
import { describe, expect, beforeEach, afterEach, jest, test } from '@jest/globals';

describe('mòdul throttle', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        jest.useRealTimers();
    });
    test("la funció s'executa immediatament", () => {
        const callback = jest.fn();
        const throttled = throttle(callback, 500);
        throttled();
        expect(callback).toBeCalledTimes(1);
    });
    test("la funció s'executa només una vegada abans d'un interval complet", () => {
        const callback = jest.fn();
        const throttled = throttle(callback, 500);
        throttled();
        throttled();
        jest.advanceTimersByTime(250);
        throttled();
        throttled();
        expect(callback).toBeCalledTimes(1);
    });
    test("la funció es torna a executar després d'un interval complet, només una vegada", () => {
        const callback = jest.fn();
        const throttled = throttle(callback, 500);
        throttled();
        throttled();
        jest.advanceTimersByTime(500);
        throttled();
        throttled();
        expect(callback).toBeCalledTimes(2);
    });
    test("la funció s'executa només una vegada per cada interval complet", () => {
        const callback = jest.fn();
        const throttled = throttle(callback, 500);
        throttled();
        throttled();
        jest.advanceTimersByTime(500);
        throttled();
        throttled();
        jest.advanceTimersByTime(500);
        throttled();
        throttled();
        jest.advanceTimersByTime(500);
        throttled();
        throttled();
        jest.advanceTimersByTime(500);
        throttled();
        throttled();
        jest.advanceTimersByTime(500);
        throttled();
        throttled();
        expect(callback).toBeCalledTimes(6);
    });
})