import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './Form.css'
const Form = () => {
    const [user, setuser] = useState({});
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {setuser(data)}
    console.log(watch("example"));
    // const User={...user};
    useEffect(() => {
    const User={...user};
     fetch('http://localhost:5000/user/add',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(User)
     })  
     .then(res=>res.json())
      .then(data =>{
        if(data){
         
          alert('Data Insert Successfully');
        }
      })
    }, )
    return (
        <div>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Your Name" />
                {errors.name && <span>Name is required</span>}

                <input  {...register("email", { required: true })} placeholder="Your Email" />
                {errors.email && <span className="error">Email is required</span>}

                <input  {...register("address", { required: true })} placeholder="Your Address" />
                {errors.addresses && <span className="error">Address is required</span>}

                <input  {...register("phone", { required: true })} placeholder="Your Phone Number" />
                {errors.phone && <span className="error">Phone Number is required</span>}

                <input className="button" type="submit" />
                <h1>{user.name}</h1>
            </form>
        </div>
    );
};

export default Form;