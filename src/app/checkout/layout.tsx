
import Header from "@/components/shared/ShopHeader";
import Footer from "@/components/shared/footer";


export default async function RootLayout({
  children,
}: {  

  children: React.ReactNode;
}) {
  return (
    <div>
      
        <Header/>
      <main className="flex flex-col justify-center items-center w-full"> <div className="w-[95%] lg:w-[80%] py-[50px]">{children}</div></main> 
        <Footer/>
  
    </div>
  );
}
