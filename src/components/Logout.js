import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Perform logout logic here, such as clearing tokens or session data
        navigate('/');
    }, [navigate]);

    return null; // Since this component doesn't need to render anything
};

export default Logout;
