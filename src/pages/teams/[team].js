import React from 'react'
import {  Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Layout from '@/components/Layout/dashboard';
import { useRouter } from 'next/router';
import { getAllTeams } from 'api/AllTeam';

export default function Home({data}) {
  const router = useRouter()

  

  console.log(data);
  return (
    <Layout>
      <Typography variant="h4" component={"h5"} sx={{ textAlign: "center" }}>
        {router.query.team}
      </Typography>
      <Grid container justifyContent={"center"} gap={3} mt={4}>
      {data?.users?.map((v, i) => (
          <Grid item lg={2.5} key={i}>
            <Card>
              <CardMedia
                sx={{ height: 340 }}
                image={v.img}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" color="text.secondary" >
                  {v.name}
                </Typography>
                <Typography variant="p"  sx={{mt:3}}>
                   {v.job}
                </Typography>
              </CardContent>
         
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}


export async function getServerSideProps(context) {

  const teamName = context.query.team


  const res = await getAllTeams(teamName)

  return {
    props: {data: res}, 
  }
}
