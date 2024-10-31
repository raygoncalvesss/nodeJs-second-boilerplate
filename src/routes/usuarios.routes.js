import { Router } from "express";
import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();

const usersRepository = new UsersRepository();

usuariosRoutes.get("/", (req, res) => {
    const usuarios = usersRepository.getAllUsers();
    return res.status(200).json({
        message: 
        usuarios.length == 0
        ? "Não há usuarios cadastrados"
        : `Total de usuarios: ${usuarios.length}`,
        usuarios,
    });
});

usuariosRoutes.post("/", (req, res) => {
    const {name, email, password} = req.body;

    const usuario = usersRepository.AddUser(name, email, password);

    return res.status(201).json({
        message: "Usuario cadastrado com sucesso!",
        usuario,
    });
});
export default usuariosRoutes;