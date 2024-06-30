import CardStyle from "./card.module.css";

export default function Card({ColorData}){

    return(
        <div style={{color:ColorData?.primery?.color,backgroundColor:ColorData?.secondary?.bg}} className={CardStyle.container}>
            <div style={{backgroundColor:ColorData?.primery?.border}} className={CardStyle.side}></div>
            <div className={CardStyle.content}>
                <h1>Next js Color mode</h1>
                <button style={{backgroundColor:ColorData?.secondary?.bg,background:`${ColorData?.primery?.border}`}}>😀 open</button>
            </div>
        </div>
    )
}