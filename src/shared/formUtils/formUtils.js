export function Input(value,config,type,title,validRules,options=null,valid=false)
 {
     this.value=value;
     this.config={...config,value:this.value};
     this.valid=this.value.length>0 ?true:false;
     this.touched=false;
     this.type=type;
     this.title=title;
     this.validRules=validRules;
     this.options=options;
 }
 const checkValidity=(value,rules)=>{
    let isValid=true;
    for (const key in rules) {
        if (key==="length") {
            isValid=value.length>rules[key] &&isValid;
        }
        if (key==="required") {
            if(rules[key])
            {
                isValid=rules[key] && isValid;
            }
           
        }
    }
    return isValid;
}
export const inputChangeHandler=(setState,state)=>{

    return(event,id,rules)=>{
        let value=event.target.value;
           
        let isValid=true;
        if(id==="image")
        {
            value=rules;
        }else{

        }
         if(rules)
        {
          isValid=checkValidity(value,rules);
       }

       let itemData={...state.itemData};
       let elment={...itemData[id]} ;
       
       elment.value=value;
       elment.config.value=value;
       elment.valid=isValid;
       elment.touched=true;
       itemData[id]=elment;
       let formValid=true;
       for (const key in itemData) {
        formValid=itemData[key].valid && formValid;
       }
       setState({itemData,formValid});
    }


}
