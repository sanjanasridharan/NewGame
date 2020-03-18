import React,{createContext,useState,useEffect,useMemo} from 'react'
import axios from 'axios'
export const CheckStatus=createContext();

const CheckStatusProvider=(props)=>{
    const [currentLevel,setcurrent] = useState(1)
    const [open,setopen] = useState(false)
    const [activeStep,setactive] = useState(0)
   
    const [user,setuser]=useState(()=>{
        const localData=localStorage.getItem('user');
        console.log(localData)
        return localData ? JSON.parse(localData): [];
    })
    const [badgeData,setBadgedata]=useState(()=>{
        var localData=localStorage.getItem('badge');
        console.log(localData)
        return localData ? JSON.parse(localData): [];
    })  
    // useEffect(() => {
        
        
    // }, [user])

     useEffect(() =>{
         console.log(badgeData)
         console.log("vvv")
         localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem("badge",JSON.stringify(badgeData))
     },[user,badgeData])

    const getuserdetails =async(props) => { 
        const response=await axios.get('http://localhost:5000/data/getUserDetails',{params:{name:props}})
        console.log("response", response);
        console.log("before", user);
        setuser(response.data);
            console.log(user);
                    }

    const getBadgeData = async ()=> {
         const response=await axios.get('http://localhost:5000/data/getBadges')
            setBadgedata(response.data)
            
        }
    
   const afterModal = (props) => {
        setactive(activeStep+1)
        setcurrent(props)
    }
    
    const handleChange = () => {
        setopen(!open);
    };
    
    return(
        <CheckStatus.Provider value={{currentLevel:currentLevel,open:open,handleChange:handleChange,activeStep:activeStep,afterModal:afterModal,getuserdetails:getuserdetails,user:user,getBadgeData:getBadgeData,badgeData:badgeData}}>
            {props.children}
        </CheckStatus.Provider>
    )
}

export default CheckStatusProvider