import { redirect } from "next/navigation";
import LoginForm from "../components/pages/login";
import { getServerSession } from 'next-auth'

export default async function Login() {
 const session = await getServerSession()
  if(session) {
    redirect('/')
     
 }

    return (
      <main>
         <LoginForm />
      </main>
    )
  }