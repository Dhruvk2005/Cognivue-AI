import SideNav from "./component/sidenav";

export default function PrivateLayout({children}:any){
  return(
    <div className="flex" >
      <div>
        <SideNav/>
      </div>

      <div className="flex-1" >
        {children}
      </div>
    </div>
  )

}