import { ReactElement } from "react";

type TextAreaProps = {
    readonly placeholder?: string;
    readonly inputRef?: React.Ref<HTMLTextAreaElement>;
    readonly icon? : ReactElement;
};

type InputFieldProps = {
    readonly type: string;
    readonly placeholder?: string;
    readonly inputRef?: React.Ref<HTMLInputElement>;
    readonly icon?:ReactElement
};


export function InputBox({type,placeholder,inputRef,icon}: InputFieldProps){
    return(
        <div className="w-full relative">
        <input 
            ref={inputRef}
            type={type} 
            className="w-full rounded-xl bg-slate-700/20 outline-none text-left px-4 py-3 pr-12" 
            placeholder={placeholder} />  
        {icon && (<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600/50">
                    {icon}
                </div>)} 
        </div>
    )
}

export function TextArea({inputRef,placeholder,icon} :TextAreaProps){
    return (
            <div className="relative w-full">
            <textarea 
                className="w-full rounded-xl bg-slate-700/20 outline-none text-left px-4 py-3" 
                placeholder={placeholder} 
                ref={inputRef}/>
                {icon && (<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                            {icon}
                        </div>)}    
            </div>
        )
}