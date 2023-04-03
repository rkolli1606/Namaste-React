import {useState} from 'react'

const Section = ({title,description,visible,setVisible})=>{
    return(
        <div className="border border-black p-2 m-2">
            {visible?<button onClick={()=>{
                setVisible("hide")}}>Hide</button>:
            <button onClick={(visible)=>{setVisible(visible)}}>Show</button>}
            {visible&&<><h3 className="font-bold">{title}</h3>
            <p>{description}</p></>}
        </div>
    )
}

const Instamart = ()=>{
    const[isVisible,setIsVisible] = useState("")

    return(
        <div>
            <h1 className="text-2xl font-bold">Instamart</h1>
            <Section title={'About Instamart'} visible={isVisible==="about"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                setVisible={(name)=>{
                    if(name==="hide"){
                        setIsVisible("")
                        return;
                    }
                  
                        setIsVisible("about")}} />
            <Section title={'About Team'} visible={isVisible==="team"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            setVisible={(name)=>{
                if(name==="hide")
                {
                    setIsVisible("")
                    return;
                }
                
                    setIsVisible("team")}} />
            <Section title={'About Carrers'} visible={isVisible==="carrers"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            setVisible={(name)=>{
                if(name==="hide")
                {
                    setIsVisible("")
                    return;
                }
                
                    setIsVisible("carrers")}} />
            <h2>100's of components inside it</h2>
        </div> 
    )
}

export default Instamart