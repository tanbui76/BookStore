import express from "express";
import connection from "../config/connectDB";
import axios from "axios";
import jwt from 'jsonwebtoken';

let getAllBooks = async (req, res) => {
    try {
        const [rows, fields] = await (await connection).execute("SELECT * FROM book");
        return res.status(200).json({
            message: "Get all books",
            data: rows
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error",
            detail: error.message
        });

    }
}

module.exports = {
    getAllBooks: getAllBooks
}

