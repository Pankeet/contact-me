type InputProps = {
    readonly Type : string,
    readonly placeholder? : string,
    readonly isTextArea: boolean
}

export function InputBox(Props : InputProps){
    if(Props.isTextArea){
        return (
            <div className="w-full">
            <textarea className="w-full rounded-xl bg-slate-700/20 text-left px-4 py-3" placeholder={Props.placeholder} />    
            </div>
        )
    }
    else{
        
        return(
            <div className="w-full">
            <input type={Props.Type} className="w-full rounded-xl bg-slate-700/20 text-left px-4 py-3" placeholder={Props.placeholder} />    
            </div>
        )
    }
}