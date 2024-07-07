import { postModel } from "./post.model.js";

const getAll = async(req,res) => {
  try {
    const response = await postModel.getAll()
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ok:false})
  }
}

const getOneById = async(req,res) => {
  try {
    const {id} = req.params
    const response = await postModel.getOneById(id)
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ok:false})
  }
}

const create = async(req,res) => {
  try {
    if (!req.body.usuario || !req.body.url, !req.body.descripcion){
      return res.status(400).json({ok:false, msg:'se requiere usuario,url y descripcion'})
    }
    const newRegister = req.body
    const response = await postModel.create(newRegister)
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ok:false})
  }
}




const update = async(req,res) => {
  try {
    const {id} = req.params
    if (!req.body.titulo || !req.body.artista, !req.body.tono){
      return res.status(400).json({ok:false, msg:'se requiere titulo,artista y tono'})
    }
    const updateSong = req.body
    const response = await postModel.update(id,updateSong)
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ok:false})
  }
}

const remove = async(req,res) => {
  try {
    const {id} = req.params

    const response = await postModel.remove(id)
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ok:false})
  }
}


export const postController = {
  getAll,
  getOneById,
  create,
  update,
  remove
}