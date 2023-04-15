const Button = ({text = 'Tirá', onClick = ()=>alert('No Function') } ) => {
    return ( 
        <button onClick={onClick} >{text}  </button>
     );
}
 
export default Button;