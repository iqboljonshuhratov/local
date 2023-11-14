import { team } from "@/components/teamData/teamData";

export default function handler(req, res) {
    res.status(200).json(team)
  }