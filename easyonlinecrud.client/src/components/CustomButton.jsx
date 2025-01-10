
import { Button } from "react-bootstrap";

function CustomButton ({ title, onClick}) {
    return (
        <Button className="btn w-100" style={{
            backgroundColor: '#152837',
            color: '#fff',
            borderRadius: '4px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
            borderColor: "transparent",
            marginTop: "1rem",
            marginBottom: "1rem"
        }} type="submit" onClick={onClick || (() => { })}>
            {title}
        </Button>
    )
}

export default CustomButton