
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
      <main> {children}</main> 
        <Footer/>
  
    </div>
  );
}
