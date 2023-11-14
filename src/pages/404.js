import Layout from '@/components/Layout/dashboard'
import { Alert } from '@mui/material'
import React from 'react'

export default function Layout404() {
  return (
    <Layout>
        <Alert severity="error">Bunday sahifa mavjud emas!</Alert>
    </Layout>
  )
}
