'use client'

import { withAuth } from "../withAuth"

function Home(props: any) {
  console.log(props)
  return (
    <h1>You're now authenticated, Welcome Home!</h1>
  )
}

export default withAuth(Home);