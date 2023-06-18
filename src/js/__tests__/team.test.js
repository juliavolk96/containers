import { test, expect } from '@jest/globals';

import Team from '../team';

import Character from '../character';

test('Добавление персонажа в команду', () => {
  const team = new Team();
  const character = new Character('John');

  team.add(character);

  expect(team.toArray()).toEqual([character]);
});

test('Добавление нескольких персонажей в команду', () => {
  const team = new Team();
  const character1 = new Character('John');
  const character2 = new Character('Jane');
  const character3 = new Character('Bob');

  team.addAll(character1, character2, character3);

  expect(team.toArray()).toEqual([character1, character2, character3]);
});

test('Появление ошибки при добавлении дублирующего персонажа', () => {
  const team = new Team();
  const character = new Character('John');

  team.add(character);

  expect(() => team.add(character)).toThrowError('Персонаж уже есть в команде');
});
