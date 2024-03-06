import React,{useState} from 'react'
import styled from 'styled-components'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitForm=(event)=>{
        event.preventDefault();
    }
  return (
    <Wrapper>
      <div className="contact-form">
        <form onSubmit={submitForm}>
            <input type="text" name='name' placeholder='Name' onChange={handleChange} value={formData.name} required/>
            <input type="email" name="email" placeholder='Your Email' onChange={handleChange} value={formData.email} required/>
            <textarea name="message" onChange={handleChange} value={formData.message} cols="30" rows="10" placeholder='Message' required></textarea>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
display:flex;
justify-content:center;
margin-top:100px;

.contact-form{
    display: flex;
    width: 80%;
    background-color: rgba(67, 67, 67, 0.227);
    justify-content: center;
    align-items: center;
    padding: 50px 30px;
    border-radius: 20px;
}
.contact-form form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 50%;
}
.contact-form form input{
    width: 100%;
    height: 50px;
    border: none;
    padding: 0 30px;
    font-size: 1.3rem;
    outline: none;
    border-radius: 10px;
}
.contact-form form textarea{
    width: 100%;
    font-size: 1.3rem;
    padding: 10px 30px;
    border: none;
    outline: none;
    resize: none;
    border-radius: 10px;
}
.contact-form form input[type="submit"]{
    width: fit-content;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.695);
    color: #fff;
    margin-top: 20px;
}

@media(max-width:1100px){
    .contact-form form{
        width: 70%;
    }
}
@media(max-width:700px){
    .contact-form form{
        width: 80%;
    }
}
@media(max-width:500px){
    .contact-form form{
        width: 100%;
    }
    .contact-form{
        width: 90%;
    }
}

`;

export default Contact
