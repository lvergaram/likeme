import {ddbb} from '../DATABASE/connection.ddbb.js'

const getAll = async() => {
  try {
    const query = {
      text:`
        SELECT * FROM POSTS
      `,
    }
    const {rows:response} = await ddbb.query(query)
    return response
  } catch (error) {
    throw error
  }
} 

const getOneById = async(id) => {
  try {
    const query = {
      text:`
        SELECT * FROM POSTS
        WHERE id = $1
      `,
      values:[+id]
    }
    const {rows:response} = await ddbb.query(query)
    return response[0]
  } catch (error) {
    throw error
  }
} 

const create = async(newRegister) => {
  try {
    const {usuario,url,descripcion} = newRegister
    const query = {
      text:`
        INSERT INTO posts(usuario,url,descripcion) 
        VALUES
        ($1,$2,$3)
        RETURNING *
      `,
      values:[usuario,url,descripcion]
    }
    const {rows:response} = await ddbb.query(query)
    return response[0]
  } catch (error) {
    throw error
  }
} 

const update = async(id, updateSong) => {
  try {
    const {titulo,artista,tono} = updateSong
    const query = {
      text:`
        UPDATE CANCIONES
        SET 
          titulo = $2,
          artista = $3,
          tono = $4
        WHERE id = $1
        RETURNING *
      `,
      values:[id, titulo,artista,tono]
    }
    const {rows:response} = await ddbb.query(query)
    return response[0]
  } catch (error) {
    throw error
  }
} 

const remove = async(id) => {
  try {
    const query = {
      text:`
        DELETE FROM CANCIONES
        WHERE ID = $1
        RETURNING *
      `,
      values:[id]
    }
    const {rows:response} = await ddbb.query(query)
    return response[0]
  } catch (error) {
    throw error
  }
} 



export const postModel = {
  getAll,
  getOneById,
  create,
  update,
  remove
}