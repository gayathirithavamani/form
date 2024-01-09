import { Col, Form, Row , Input, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate ,useLocation} from 'react-router-dom';
import {submit} from "../../../slice/submit";
// import useToken from 'antd/es/theme/useToken'
function Resetpassword() {
  const [token,setToken]=useState("")
  const location=useLocation()
    const [form] = Form.useForm();
    const [submitting, setSubmitting] = useState(false);
    const [reset,setReset]=useState(true)
    const [thank,setThank]=useState(false)
    const dispatch=useDispatch()
  const navigate=useNavigate()

  const comparePasswords = (rule, value, callback) => {
    const passwordFieldValue = form.getFieldValue('Password');

    if (passwordFieldValue && value !== passwordFieldValue) {
      callback('Passwords do not match');
    } else {
      callback();
    }
  };
  useEffect(()=>{
    setToken(new URLSearchParams( location.search).get('token'))
  })
    const handleSubmit = (values) => {
        // Handle form submission, e.g., send data to server
       
        console.log('Received values:', values);
        const password=values?.Password;
        
        setSubmitting(false);
        dispatch(submit({password ,token,navigate}));
        setReset(false)
        setThank(true)
      };
    
  return (
    <div style={{display:'flex',width:'100%',height:'80vh', justifyContent:'center',alignItems:'center'}}>
      { reset &&
        <Form form={form} onFinish={handleSubmit} style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',width:'16%',border:'1px solid white',borderRadius:'20px'}}>
     <div>
        <div style={{textAlign:'center',margin:'20px'}}>
        <h2 style={{color:'white'}}>Password</h2>
        </div>
        <div>
            <h4 style={{color:'white'}}>Password</h4>
          <Form.Item
            name="Password"
            rules={[
              { required: true, message: 'Please add a password' },
              { validator: comparePasswords },
            //   { min: 8, message: 'Password must have a minimum length of 8' },
            //   {
            //     pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
            //     message: 'Password must contain at least one lowercase letter, uppercase letter, number, and special character',
            //   },
            ]}
          >
            <Input.Password size="large" placeholder="********" />
          </Form.Item>
        </div>
         
        
       <div>
            <h4 style={{color:'white'}}>Verify Password</h4>
          <Form.Item 
            name="VerifyPassword"
            rules={[{ required: true, message: 'Please verify your password' }]}>
                <Input.Password size="large" placeholder="********" />
          </Form.Item>
        </div>
     </div>
     
         
      
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={submitting}>
          Submit
        </Button>
      </Form.Item>
    </Form>
      }
      {thank&&
      <div style={{color:'white',fontSize:'50px'}}>
        thank you!
        </div>

      }
    </div>
  )
}

export default Resetpassword