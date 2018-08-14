'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Token = new Schema({
    hash: { type: String, unique: true, required: true },
    owner: String,
    name: String,
    totalSupply: String,
    totalSupplyNumber: Number,
    symbol: String,
    decimals: Number,
    status: Boolean
}, {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
    versionKey: false
})

module.exports = mongoose.model('Token', Token)
