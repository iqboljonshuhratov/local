/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout/dashboard";
import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRouter } from "next/router";
import { team } from "@/components/teamData/teamData";
import { getTeams } from "api/teams";

export default function teams({data}) {
//   const [data, setData] = useState([])

// useEffect(() => {
//   const res = getTeams().then((res) => setData(res))
// },[])


const router = useRouter()

  return (
    <Layout>
      <Typography variant="h4" component={"h5"} sx={{ textAlign: "center" }}>
        Teams
      </Typography>
      <Grid container justifyContent={"center"} gap={3} mt={4}>
 
        {data?.map((v, i) => (
          <Grid item lg={3} key={i}>
            <Card onClick={() => router.push("/teams" + v.path) } >
              <CardMedia
                sx={{ height: 200, objectFit:"cover" }}
                image={v.img}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" color="text.secondary" >
                  {v.job}
                </Typography>
                <Typography variant="p"  sx={{mt:3}}>
                   {"Users "+ v.users}
                </Typography>
              </CardContent>
         
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
export async function getStaticProps(context) {
  const res = await getTeams()
  console.log(res);
  return {
    props: {data: res}, // will be passed to the page component as props
  }
}