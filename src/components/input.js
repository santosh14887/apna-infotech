export default function InputField({...props}) {
    let { type, name, placeholder="", value, onChange, ref, formError, labelText="",labelclassName="", inputclassName="", errorClass="" } = props;
return (
    <>
    <label htmlFor={name} className={labelclassName}>
        { labelText }
    </label>
    <input type={type} name={name} ref = {ref} placeholder={placeholder} value={value} onChange={onChange} className= {inputclassName} />
     {formError && formError[name] && <p className={errorClass}>{formError[name]}</p> }
     </>
);  
}