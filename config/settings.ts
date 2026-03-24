import 'dotenv/config';

class Settings {
  public readonly BOT_TOKEN: string;

  public constructor() {
    this.BOT_TOKEN = this.getEnv('BOT_TOKEN');
  }

  private getEnv(key: string): string {
    const value = process.env[key];
    if (!value) {
      throw Error('The key was not found in the environment');
    }
    return value;
  }
}

export const settings = new Settings();
