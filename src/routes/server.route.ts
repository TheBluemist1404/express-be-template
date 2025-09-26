import { Express } from "express";
const authRoutes = require('./auth.route');

module.exports = (app: Express) => {
  const version = '/api/v1';

  app.use(version + '/auth', authRoutes);
}