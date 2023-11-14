import { AllTeam } from "@/components/teamData/teamData";

export default function handler(req, res) {
    const teamName = req.query.id

    const team = AllTeam.find((i) => {
        return i.slug == teamName
    })

    console.log(team);

    res.status(200).json(team)
  }