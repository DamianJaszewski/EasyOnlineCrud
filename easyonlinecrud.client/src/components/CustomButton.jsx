
import { Button } from "react-bootstrap";

function CustomButton ({ title}) {
    return (
        <Button className="btn w-100" style={{
            backgroundColor: '#152837',
            color: '#fff',
            borderRadius: '4px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        }} type="submit">
            {title}
        </Button>
    )
}

export default CustomButton