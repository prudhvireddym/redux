import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {themeColorReducer} from '../features/theme'

const ChangeTheme = () =>{
    const [themeColor,setThemeColor] = useState("blue")
    const dispatch = useDispatch()
    
    const dispatchEvent=()=>{
        dispatch(themeColorReducer(themeColor))
    }
    return(<div>
        <div style={{color:themeColor}}>Hello how you doing</div>
        <input type="text" name="ColorArea" value={themeColor} onChange={(e)=>setThemeColor(e.target.value)} />
        <button onClick={()=>dispatchEvent()}> Set Color</button>
    </div>)


}

export default ChangeTheme;