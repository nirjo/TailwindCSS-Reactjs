const validation = (values) => {
    let errors={};
    if(!values.username){
        errors.username="Name is required"
    }
   
    if(!values.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
    }
    if(!values.password){
        debugger
        errors.password="Password is required"
    }else if(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{5,})$/.test(values.password)){
        errors.password="Password must be more than five characters"  
    }
    if(!values.phonenumber){
        errors.phonenumber="Phone number is required"
    }else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(values.phonenumber)){
        errors.phonenumber="Phone Number must contain only ten characters"
    }
  return errors;    
}

export default validation
