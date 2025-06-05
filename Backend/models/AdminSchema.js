// Copyright (c) 2025 Jino Baby
// This file is licensed under the MIT License.

var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    adminEmail: String,
    adminPassword: String

});

module.exports = mongoose.model('Admin-data', adminSchema);