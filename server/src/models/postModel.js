import pool from '../../db/config.js'

export const getPostModel = async ()=>{
    const sqlQuery = 'SELECT * FROM posts ORDER BY id';
    const response = await pool.query(sqlQuery);
    console.log(response.rows)
    return response.rows
}

export const createPostModel = async(titulo, descripcion, url, likes) =>{
    const sqlQuery = 'INSERT INTO posts (titulo, descripcion, img, likes) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [titulo, descripcion, url, likes];
    const result = await pool.query(sqlQuery, values);
    return result.rows
}

export const putPostModel = async(id) => {
    const sqlQuery = `UPDATE posts SET likes = likes+1 WHERE id = ${id}`
    const result = await pool.query(sqlQuery)
    return result.rows
}

export const deletePostModel = async(id) =>{
    const sqlQuery = `DELETE FROM posts where id = ${id}`;
    const result = await pool.query(sqlQuery);
    return result.rows
}