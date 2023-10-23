// import { getServerSession } from 'next-auth'
import { redirect } from "next/navigation";
import RegisterPage from "../components/pages/register";
import MainNav from "../components/organisms/MainNav";
import Footer from "../components/organisms/footer-logout";

export default function page() {
  //   const session = await getServerSession()
  //   if(session) {
  //     redirect('/')

  //  }

  return (
    <div>
      <MainNav />
      <RegisterPage />
      <Footer />
    </div>
  );
}
