
import Header from "@/components/shared/header";
import Footer from "@/components/home/footer";


export default async function RootLayout({
  children,
}: {  

  children: React.ReactNode;
}) {
  return (
    <div>
      
      grid
      grid
      
      list
      Usage
      Last 30 days
      
      
      list
      Usage
      Last 30 days
      
        <Header/>
      <main> {children}</main> 
        <Footer/>
  
    </div>
  );
}
