import { test, expect } from '@jest/globals';

import Settings from '../settings';

test('Default настройки установлены верно', () => {
  const settings = new Settings();

  expect(settings.settings.get('theme')).toBe('dark');
  expect(settings.settings.get('music')).toBe('trance');
  expect(settings.settings.get('difficulty')).toBe('easy');
});

test('Пользовательские настройки переопределяют default настройки', () => {
  const settings = new Settings();

  settings.setUserSetting('theme', 'light');
  settings.setUserSetting('music', 'pop');
  settings.setUserSetting('difficulty', 'hard');

  expect(settings.settings.get('theme')).toBe('light');
  expect(settings.settings.get('music')).toBe('pop');
  expect(settings.settings.get('difficulty')).toBe('hard');
});

test('Пользовательские настройки добавляются в Map настроек', () => {
  const settings = new Settings();

  settings.setUserSetting('theme', 'gray');
  settings.setUserSetting('music', 'rock');
  settings.setUserSetting('difficulty', 'nightmare');

  expect(settings.settings.size).toBe(3);
  expect(settings.settings.get('theme')).toBe('gray');
  expect(settings.settings.get('music')).toBe('rock');
  expect(settings.settings.get('difficulty')).toBe('nightmare');
});

test('Неизвестные настройки возвращают undefined', () => {
  const settings = new Settings();

  expect(settings.settings.get('unknown')).toBeUndefined();
});

test('Пользовательские настройки не влияют на default настройки', () => {
  const settings = new Settings();

  settings.setUserSetting('theme', 'light');
  settings.setUserSetting('music', 'pop');
  settings.setUserSetting('difficulty', 'hard');

  expect(settings.defaultSettings.get('theme')).toBe('dark');
  expect(settings.defaultSettings.get('music')).toBe('trance');
  expect(settings.defaultSettings.get('difficulty')).toBe('easy');
});
