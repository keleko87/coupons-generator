import * as dotenv from "dotenv";

dotenv.config();

interface IConfig {
  port: string | number;
}

const NODE_ENV: string = process.env.NODE_ENV || "development";

const development: IConfig = {
  port: process.env.PORT || 3000,
};

const production: IConfig = {
  port: process.env.PORT || 3000,
};

const test: IConfig = {
  port: process.env.PORT || 3000,
};

const config: {
  [name: string]: IConfig;
} = {
  test,
  development,
  production,
};

export default config[NODE_ENV];
