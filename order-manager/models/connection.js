'use strict';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { Sequelize } from "sequelize";

const env = process.env.NODE_ENV || 'development';
const config = require('../config/database.json')[env];

export default new Sequelize(config.database, config.username, config.password, config);