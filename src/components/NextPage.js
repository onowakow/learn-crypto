import { useHistory } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Row from 'react-bootstrap/Row'

const NextPage = ({pageName}) => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path)
  }

  return (
    <Row className='justify-content-center'>

    <ScrollToTop />
    <button 
      style={{
        width: '50%',
        marginTop: '1em'
      }}
      onClick={() => handleClick(pageName)} 
      className="primaryButton"
      >
      next page
    </button>
      </Row>
  );
};

export default NextPage
