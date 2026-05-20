type TextAreaProps = {
    placeholder?: string;
    isTextArea: true;
    inputRef?: React.Ref<HTMLTextAreaElement>;
};

type InputFieldProps = {
    type: string;
    placeholder?: string;
    isTextArea: false;
    inputRef?: React.Ref<HTMLInputElement>;
};

type InputProps = TextAreaProps | InputFieldProps;

export function InputBox(Props : InputProps){
    if(Props.isTextArea){
        return (
            <div className="w-full">
            <textarea 
                className="w-full rounded-xl bg-slate-700/20 text-left px-4 py-3" 
                placeholder={Props.placeholder} 
                ref={Props.inputRef}/>    
            </div>
        )
    }
    else{
        return(
            <div className="w-full">
            <input 
                ref={Props.inputRef}
                type={Props.type} 
                className="w-full rounded-xl bg-slate-700/20 text-left px-4 py-3" 
                placeholder={Props.placeholder} />    
            </div>
        )
    }
}