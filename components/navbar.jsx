"use client"

import { border, Switch } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { themes } from "../themes/themes"
import { FaSun } from "react-icons/fa"

const Dark = {
    primery: {
        bg : themes.primery.bg.dark,
        color: themes.primery.color.dark,
        border: themes.primery.border.dark
    },
    secondary: {
        bg: themes.secondary.bg.dark,
        color: themes.secondary.color.dark
    }
}
const Light = {
    primery: {
        bg : themes.primery.bg.light,
        color: themes.primery.color.light,
        border: themes.primery.border.light
    },
    secondary: {
        bg: themes.secondary.bg.light,
        color: themes.secondary.color.light
    }
}

export default function Navbar({ColorData}){
    const [colordata, setColorData] = useState(Light)
    const [on, setOn] = useState(false)

    /*
    useEffect(() => {
        if(props.ground == 'primary.dark'){
            setNav(<div style={{width:"100%",background:"#f0f"}}>nav</div>)
        }
        else{
            setNav(<div style={{width:"100%",background:"pink"}}>nav</div>)
        }
    },[props])
    */

    useEffect(() => {
        if(on){
            setColorData(Dark)
            ColorData(Dark)
        }
        else{
            setColorData(Light)
            ColorData(Light)
        }
    },[on])

    return(
        <div style={{backgroundColor:colordata.secondary.bg, height:"3rem",padding:".5rem"}}>
            
            <div class="checkbox-wrapper-5">
  <div class="check">
    <input id="check-5" type="checkbox" onChange={() => setOn(!on)}/>
    <label for="check-5"></label>
  </div>
</div>
        </div>
    )
}