import { useNavigate } from 'react-router-dom';

export function useBackNavigation() {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  return goBack;
}