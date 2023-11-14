import axios from "axios"

const baseUrl = "http://localhost:3000/api"

const getAllTeams = async (team) => {
    try {
        const res = await axios.get(`${baseUrl}/teams/${team}`)
        return res.data
    } catch (error) {
        return []
    }
}   

export {getAllTeams}