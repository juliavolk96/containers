class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }

  setUserSetting(name, value) {
    this.userSettings.set(name, value);
  }
}

export default Settings;
