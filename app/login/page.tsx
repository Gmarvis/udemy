// import { redirect } from "next/navigation";
import MainNav from "../components/organisms/MainNav";
import LoginForm from "../components/pages/login";
// import { getServerSession } from 'next-auth'

export default  function Login() {
//  const session = await getServerSession()
//   if(session) {
//     redirect('/')
     
//  }

    return (
      <main>
         <MainNav/>
         <LoginForm />
      </main>
    )
  }