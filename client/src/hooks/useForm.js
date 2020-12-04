import {useState} from 'react';

function useForm(initialValues) {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValues);
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
      setValues(initialValues)
    };

    return([values, showSuccessMessage, handleChanges, handleSubmit])
}

export default useForm;