import {sql, SQL} from 'bun';
const mysql = new SQL("mysql2://root:root@localhost:3306/mydb");
let userData={ name: "John" }
const result = await mysql`INSERT INTO users ${sql(userData)}`;
console.log(result.insertId,userData);  // Bun SQL 可能支持