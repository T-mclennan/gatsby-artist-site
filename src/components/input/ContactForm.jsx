import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Form, Input, Button} from 'antd';
import axios from 'axios';

const { TextArea } = Input;
const inputStyle = {
  margin: '0.5rem'
}

function ContactForm() {

  const recaptchaRef = React.createRef();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const onSubmit = (event) => {
    console.log(event)
    recaptchaRef.current.execute();
  }

  const onReCAPTCHAChange = (captchaCode) => {
    if(!captchaCode) {
      return;
    }

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: `https://formspree.io/${process.env.GATSBY_FORMSPREE}`,
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  }

  return (
      <>
        {!status.submitted && 
        <Form 
          style={{width: '100%', maxWidth: '25rem'}}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          autoComplete="off">

          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Please enter a valid E-mail!',
              },
              {
                required: true,
                message: 'Please input a valid email address!',
              },
            ]}>
            <Input
              id="email"
              type="email"
              name="_replyto"
              placeholder="Email"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: 'Please include a message to send!',
              },
            ]}>
            <TextArea
              id="message"
              name="message"
              placeholder="Message"
              onChange={handleOnChange}
              required
              value={inputs.message}
              autoSize={{ minRows: 6, maxRows: 10 }}
              allowClear
            />
          </Form.Item>
          <input type="text" name="_gotcha" style={{display: 'none'}} />

          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.GATSBY_CAPTCHA_SITE}
            onChange={onReCAPTCHAChange}
          />
	  
          <Button htmlType="submit" disabled={status.submitting} >
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
          </Button>
        </Form>}
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </>
  )
}

export default ContactForm
