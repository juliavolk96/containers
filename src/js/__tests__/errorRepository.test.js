import { test, expect } from '@jest/globals';

import ErrorRepository from '../errorRepository';

test('Правильное добавление и перевод ошибки', () => {
  const errorRepository = new ErrorRepository();

  errorRepository.addError(404, 'Страница не найдена');
  errorRepository.addError(500, 'Внутренняя ошибка сервера');
  errorRepository.addError(403, 'Доступ запрещен');

  expect(errorRepository.translate(404)).toBe('Страница не найдена');
  expect(errorRepository.translate(500)).toBe('Внутренняя ошибка сервера');
  expect(errorRepository.translate(403)).toBe('Доступ запрещен');
});

test('ВОзвращает "Unknown error" для неизвестных кодов ошибок', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(401)).toBe('Unknown error');
  expect(errorRepository.translate(402)).toBe('Unknown error');
  expect(errorRepository.translate(503)).toBe('Unknown error');
});
