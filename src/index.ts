import { getPackageManager } from './lib';

console.log(getPackageManager(process.env.npm_config_user_agent));
