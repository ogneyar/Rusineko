import MainLayout from '../components/mainLayout'

// console.log("scroll");

export default function Home() {
  

function event(e) {
  return () => {
    console.log(e);
  }
};
 

  return (
    <MainLayout onClick={event("e")} onScroll={event("load")}>

        <h1 onClick={event("click")}>Home Page</h1>
        <h2>
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh 
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </h2>
            
          <style>{`
          body {
            width: 100%;
          }
          h2 {
            width: 100%;
            text-align: center;
          }
          `}</style>
          {
            
          // document.addEventListener("scroll", () => {
          //   console.log("scroll");
          // })
       
          }
          {
          // console.log("scroll")
          }
    </MainLayout>
  )
}
