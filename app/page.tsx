import AuthButton from '../components/AuthButton'
import Body from '@/components/Body'
import Footer from '@/components/Footer'
import UserFields from '@/components/UserFields'
import Link from 'next/link'
import WebsocketButton from "@/components/WebsocketButton";
import {WebSocketProvider} from "@/context/WebSocketContext";
import CustomizedTables from "@/components/CustomizedTables";

export default async function Index() {

  return (
    <>
      <div className="flex-1 w-full flex flex-col gap-20">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <AuthButton />
            <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
              <Link
                href="/about-us"
                className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                About Us
              </Link>
              
            </button>
          </div>
        </nav>
        <div className="user-fields-container">
          <WebSocketProvider>
            <UserFields />
            <WebsocketButton />
            <CustomizedTables />
          </WebSocketProvider>
        </div>


      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Body />
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
       <Footer/>
      </footer>
    </div>
    </>
  )
}
