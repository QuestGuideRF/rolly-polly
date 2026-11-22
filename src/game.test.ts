import { describe, it, expect } from 'vitest';
import { Game } from './game';
import { DieD6, DieD8, DieD10, DieD12 } from './die';
import { Addition as AdditionSticker, Multiplier as MultiplierSticker } from "./sticker"
describe('Game', () => {
  it('подсчитывает общий счет с данным броском', () => {
    const game = new Game();
    const dice = [
      new DieD6(2),
      new DieD6(4),
      new DieD6(4),
      new DieD6(5),
      new DieD6(6),
    ];
    expect(game.calculate(dice)).toBe(34);
  });
it('подсчитывает общий балл с парой', () => {
    const game = new Game();
    const dice = [
      new DieD6(2),
      new DieD6(2),
      new DieD6(4),
      new DieD6(5),
      new DieD6(6),
    ];
    expect(game.calculate(dice)).toBe(32);
  });
  it('вычисляет общий балл по нескольким парам', () => {
    const game = new Game();
    const dice = [
      new DieD6(3),
      new DieD6(3),
      new DieD6(5),
      new DieD6(5),
      new DieD6(1),
    ];
    expect(game.calculate(dice)).toBe(34);
  });
  it('подсчитывает общий балл с тройкой', () => {
    const game = new Game();
    const dice = [
      new DieD6(4),
      new DieD6(4),
      new DieD6(4),
      new DieD6(2),
      new DieD6(1),
    ];
    expect(game.calculate(dice)).toBe(32);
  });
  it('подсчитывает общий балл с четверкой', () => {
    const game = new Game();
    const dice = [
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
    ];
    expect(game.calculate(dice)).toBe(76);
  });
  it('подсчитывает общий балл с помощью прямой', () => {
    const game = new Game();
    const dice = [
      new DieD6(1),
      new DieD6(2),
      new DieD6(3),
      new DieD6(4),
      new DieD6(5),
    ];
    expect(game.calculate(dice)).toBe(42);
  });
  it('подсчитывает счет с помощью кубика «стрит + шестерка»', () => {
    const game = new Game();
    const dice = [
      new DieD6(1),
      new DieD6(2),
      new DieD6(3),
      new DieD6(4),
      new DieD6(5),
      new DieD6(6),
    ];
    expect(game.calculate(dice)).toBe(51);
  });
  it('вычисляет пятёрки', () => {
    const game = new Game();
    const dice = [
      new DieD6(1),
      new DieD6(1),
      new DieD6(2),
      new DieD6(1),
      new DieD6(1),
      new DieD6(1),
    ];
    expect(game.calculate(dice)).toBe(42);
  });
  it('вычисляет шестерки', () => {
    const game = new Game();
    const dice = [
      new DieD6(2),
      new DieD6(2),
      new DieD6(2),
      new DieD6(2),
      new DieD6(2),
      new DieD6(2),
    ];
    expect(game.calculate(dice)).toBe(112);
  });
  it('подсчитывает общий балл, включая наклейку с множителем', () => {
    const game = new Game();
    const sticker = new MultiplierSticker(2);
    const dice = [
      new DieD6(1),
      new DieD6(3),
      new DieD6(4),
      new DieD6(4),
      new DieD6(5),
      new DieD6(sticker)
    ];
    expect(game.calculate(dice)).toBe(48);
  });
  it('подсчитывает общий балл, включая две наклейки с множителем', () => {
    const game = new Game();
    const sticker = new MultiplierSticker(2);
    const sticker2 = new MultiplierSticker(3);
    const dice = [
      new DieD6(1),
      new DieD6(3),
      new DieD6(4),
      new DieD6(4),
      new DieD6(5),
      new DieD6(sticker),
      new DieD6(sticker2),
    ];
    expect(game.calculate(dice)).toBe(144);
  });
  it('подсчитывает сумму, используя стикер сложения и стикер множителя', () => {
    const game = new Game();
    const multiplierSticker = new MultiplierSticker(3);
    const additionSticker = new AdditionSticker(10);
    const dice = [
      new DieD6(2),
      new DieD6(2),
      new DieD6(3),
      new DieD6(4),
      new DieD6(additionSticker),
      new DieD6(multiplierSticker),
    ];
    expect(game.calculate(dice)).toBe(93);
  });
  it('вычисляет 5 шестерок и наклейку с множителем 2x', () => {
    const game = new Game();
    const sticker = new MultiplierSticker(2);
    const dice = [
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
      new DieD6(sticker),
    ];
    expect(game.calculate(dice)).toBe(190);
  });
  it('вычисляет 6, 6, 6, 6, 6, 6, 6, x2', () => {
    const game = new Game();
    const sticker = new MultiplierSticker(2);
    const dice = [
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
      new DieD6(6),
      new DieD6(sticker),
    ];
    expect(game.calculate(dice)).toBe(326);
  });
  it('рассчитывает 3, 4, 6, 7, 8, 9 как НЕ стрит', () => {
    const game = new Game();
    const dice = [
      new DieD6(3),
      new DieD6(4),
      new DieD6(6),
      new DieD8(7),
      new DieD10(8),
      new DieD12(9),
    ];
    expect(game.calculate(dice)).toBe(40);
  });
});